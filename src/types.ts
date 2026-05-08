export type ImageInput = {
    src: ImageMetadata | string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'bluesky' | 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'mastodon' | 'medium' | 'reddit' | 'x' | 'youtube' | 'whatsapp' | 'mail' | 'location';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: ImageInput;
    backgroundImage?: ImageInput;
};

export type SubscribeForm = {
    action: string;
    emailFieldName?: string;
    hiddenFields?: { name: string; value: string }[];
    honeypotFieldName?: string;
};

export type ContactLink = {
    label: string;
    url: string;
};

export type Subscribe = {
    enabled?: boolean;
    title?: string;
    text?: string;
    form?: SubscribeForm;
    whatsapp?: ContactLink;
    instagram?: ContactLink;
    email?: ContactLink;
    pranikYorum?: ContactLink,
    numerolojiYorum?: ContactLink;
    pranikEgitimi?: ContactLink;
    pranikEgitimYorumlari?: ContactLink;
};

export type commentsPreview = {
    title?: string;
    readMore?: string;
    readAll?: string;
};


export type SiteConfig = {
    logo?: ImageInput;
    title: string;
    description: string;
    image?: ImageInput;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    commentsPreview?: commentsPreview;
    blogPreview?: commentsPreview;
};


export type PageContent = {
    url: string;
    title: string;
    desc: string
    heroTxt?: string;
    heroImg?: ImageInput;
    navTitle?: string;
    navText?: string;
    hero?: Hero;
};

export type SiteContent = {
    pranikSifaDanismanligi: PageContent;
    pranikSifaYorumlari: PageContent;
    numerolojiDanismanligi: PageContent;
    numerolojiYorumlari: PageContent;
    aileDanismanligi: PageContent;
    ikizKalplerMeditasyonu: PageContent;
    pranikSifaEgitimi: PageContent;
    yazilar: PageContent;
};


export interface PranikYorum {
    "Zaman damgası": string;
    "Uygulama Kime Yapıldı": string;
    "Uygulamanın Sonuçlarına Puan Verin": string;
    "Ne Tür Bir Rahatsızlık için Uygulandı": string;
    "Danışmanlığı Değerlendirin": string;
    "Rumuz veya İsim": string
}

export interface NumerolojiYorum {
    "Zaman damgası": string;
    "Ne tür bir analiz yapıldı": string;
    "Danışmanlığı değerlendirin": string;
    "Rumuz veya İsim": string
}



export interface PranikBlog {
    published: { $t: string };
    title: { $t: string };
    content: { $t: string };
    "media$thumbnail": { url: string };
}