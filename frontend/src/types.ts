export type CatalogApp = {
  id:string; title:string; summary:string; description:string; category:string;
  tags:string[]; thumbnail:string; screenshots:string[]; appUrl:string; githubUrl:string; guideUrl:string;
  features:string[]; targetUsers:string[]; supportedDevices:string[]; status:string; featured:boolean;
  sortOrder:number; updatedAt:string; isExample:boolean; useCases:string[]; instructions:string[]; changelog:string[];
  visible?:boolean;showExampleBadge?:boolean;
};
export type Section={id:string;type:'hero'|'categories'|'featured'|'recent'|'invite'|'text';title:string;eyebrow:string;body:string;visible:boolean;isExample:boolean;showExampleBadge:boolean;layout:'grid'|'list';count:number;columns:number;image:string;buttonLabel:string;buttonView:string};
export type Site={title:string;tagline:string;brand:string;brandMark?:string;topNote?:string;footer:string;footerVisible?:boolean;categories:string[];
  categoryItems?:{name:string;icon:string;visible:boolean}[];
  hero?:{title:string;buttonLabel:string;buttonView:string;image:string;illustration:boolean;note:string;caption:string;sticker:string};
  sidebar?:{visible:boolean;title:string;body:string};
  profile:{name:string;role:string;bio:string;image?:string;visible?:boolean;heading?:string;showPrinciples?:boolean;showInvite?:boolean;inviteTitle?:string;inviteBody?:string;buttonLabel?:string;principles:string[];links:{label:string;url:string}[]}};
export type CMSDocument={site:Site;apps:CatalogApp[];sections:Section[];trash:{kind:'app'|'section';value:CatalogApp|Section}[]};
export type AdminSnapshot={head:string;document:CMSDocument;history:{id:string;createdAt:string}[];images:Record<string,string>};
export type Question={id:string;appId:string;appTitle:string;authorNickname:string;title:string;content:string;createdAt:string;status:string;adminReply?:string;repliedAt?:string};
export type Payload = {
  site: Site;
  apps:CatalogApp[]; warnings:string[];
  sections?:Section[];
  access?:{authenticated:boolean;adminConfigured:boolean;privateConfigured:boolean;expiresAt:number};
  response?:{id:string;ok:boolean;error?:string;result?:Record<string,any>};
  giscus:{enabled:boolean; repo:string; repoId:string; category:string; categoryId:string; discussionUrls:Record<string,string>};
};
