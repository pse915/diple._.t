"""Server-only transactional mail. Provider acceptance is not inbox delivery."""
from __future__ import annotations
import re
import requests
from .security import UserError


def email_address(value):
    if not isinstance(value, str) or len(value) > 254 or any(ord(c) < 32 or ord(c) == 127 for c in value):
        raise UserError("답변 받을 이메일 주소를 올바르게 입력하세요.")
    value = value.strip()
    if not re.fullmatch(r"[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+", value):
        raise UserError("답변 받을 이메일 주소를 올바르게 입력하세요.")
    local, domain = value.rsplit("@", 1)
    if len(local) > 64 or local.startswith(".") or local.endswith(".") or ".." in local or any(len(s) > 63 for s in domain.split(".")):
        raise UserError("답변 받을 이메일 주소를 올바르게 입력하세요.")
    return local + "@" + domain.lower()


class MailFailure(Exception):
    def __init__(self, message, uncertain=False):
        super().__init__(message)
        self.uncertain = uncertain


class ResendMailer:
    def __init__(self, key, sender, transport=None):
        self.key, self.sender = key, sender
        self.http = transport or requests.Session()

    @property
    def configured(self):
        try:
            return bool(self.key and email_address(self.sender))
        except UserError:
            return False

    def payload(self, record, reply):
        return {"from": email_address(self.sender), "to": [email_address(record.get("email"))],
                "subject": "[앱 공방] 비밀 질문 답변 안내",
                "text": "문의하신 내용에 대한 관리자 답변입니다.\n\n" + reply +
                        "\n\n접수번호: " + record["id"] +
                        "\n이 이메일에는 관리자 내부 메모와 질문 원문을 포함하지 않습니다."}

    def send(self, payload, key):
        if not self.configured:
            raise MailFailure("메일 Secrets 설정을 완료하세요.")
        try:
            response = self.http.post("https://api.resend.com/emails", json=payload,
                headers={"Authorization": "Bearer " + self.key, "Idempotency-Key": "question-reply/" + key},
                timeout=(5, 12), allow_redirects=False)
        except requests.RequestException:
            raise MailFailure("메일 서버 응답을 확인하지 못했습니다. 같은 발송 요청으로 재시도하세요.", uncertain=True) from None
        if response.status_code in (200, 201):
            try:
                result = response.json()
                if isinstance(result.get("id"), str) and result["id"]:
                    return result["id"]
            except (ValueError, AttributeError):
                pass
            raise MailFailure("메일 접수 결과를 확인하지 못했습니다.", uncertain=True)
        if response.status_code in (401, 403):
            raise MailFailure("메일 API 키와 인증된 발신 도메인·주소를 확인하세요.")
        if response.status_code == 429:
            raise MailFailure("메일 발송 한도에 도달했습니다. 잠시 후 재시도하세요.")
        if response.status_code >= 500 or response.status_code == 409:
            raise MailFailure("메일 처리 결과를 확인하지 못했습니다. 잠시 후 같은 요청으로 재시도하세요.", uncertain=True)
        raise MailFailure("메일 발송 요청이 거절되었습니다. 발신 설정을 확인하세요.")
