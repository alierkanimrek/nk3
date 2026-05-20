import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import logoUrl from '../assets/images/logo-black.png?url';
//import defaultSocial from '../assets/images/ovidius-preview.jpg';
import type { SiteConfig } from '../types';
import siteContent from './site-content';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: 'NK logo'
    },
    title: 'Nuray Kaya',
    description: '',
    image: {
        src: heroAvatar,
        alt: ''
    },
    primaryNavLinks: [
        {
            text: 'Ana Sayfa',
            href: '/'
        },
        {
            text: siteContent.pranikSifaDanismanligi.title,
            href: siteContent.pranikSifaDanismanligi.url
        }, 
        {
            text: siteContent.pranikYuzGermeVucutSekillendirme.title,
            href: siteContent.pranikYuzGermeVucutSekillendirme.url
        },
        {
            text: siteContent.numerolojiDanismanligi.title,
            href: siteContent.numerolojiDanismanligi.url
        },
        {
            text: siteContent.pranikSifaEgitimi.title,
            href: siteContent.pranikSifaEgitimi.url
        },
        {
            text: siteContent.ikizKalplerMeditasyonu.title,
            href: siteContent.ikizKalplerMeditasyonu.url
        },
        {
            text: siteContent.aileDanismanligi.title,
            href: siteContent.aileDanismanligi.url
        },
        {
            text: 'Yazılar',
            href: '/yazilar'
        },
                {
            text: 'Numeroloji Hesaplaması',
            href: 'https://numhero.nuraykaya.com'
        },
        {
            text: 'Hakkımda',
            href: '/hakkimda'
        },
        {
            text: 'İletişim',
            href: '/iletisim'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'Hakkımda',
            href: '/hakkimda'
        },
        {
            text: 'İletişim',
            href: '/iletisim'
        },        {
            text: 'Kullanım Şartları',
            href: '/terms'
        }

    ],
    socialLinks: [
        {
            text: 'Whatsapp',
            href: 'https://chat.whatsapp.com/HwfCyamphor4fF68jtPfOH',
            icon: 'whatsapp'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/pranic.arhat.yoga',
            icon: 'instagram'
        },
        {
            text: 'Facebook',
            href: 'https://facebook.com/turuncu64',
            icon: 'facebook'
        },
        {
            text: 'Youtube',
            href: 'https://www.youtube.com/channel/UCqeqZ7VC4TXdDSaHB9gh2ow',
            icon: 'youtube'
        },
        {
            text: 'Mail',
            href: 'mailto:nuraykaya1@gmail.com',
            icon: 'mail'
        },        {
            text: 'Konum',
            href: 'https://maps.app.goo.gl/wV3YE6R7yNsLnyQL9',
            icon: 'location'
        }


        
    ],
    hero: {
        title: 'Nuray Kaya',
        text: "Aile Danışmanı, Pranik Şifa Eğitmeni, Numerolog",
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    },
    subscribe: {
        enabled: true,
        title: 'İletişimde kalın',
        text: '',
        form: {
            action: '',
            emailFieldName: 'EMAIL',
            honeypotFieldName: ''
        },
        whatsapp: { label: 'WhatsApp\'tan katıl', url: 'https://chat.whatsapp.com/HwfCyamphor4fF68jtPfOH' },
        instagram: { label: 'Instagram\'dan yaz', url: 'https://instagram.com/pranic.arhat.yoga' },
        email: { label: 'E-posta yaz', url: 'mailto:nuraykaya1@gmail.com' },
        pranikYorum: { label: 'Formu doldur', url: 'https://forms.gle/zF9KWjv5ifGhzFji7' },
        numerolojiYorum: { label: 'Formu doldur', url: 'https://forms.gle/LCLtopWJj71XCMPi9' },
        pranikEgitimi: { label: 'En yakın eğitimi bulun', url: 'https://www.thepranichealers.com/sections/events/list.php?cmbSearchType=-&cmbSearchCourse=-&cmbSearchCountry=215&cmbSearchCity=-&cmbSearchCenter=-&txtSearchDateFrom=&txtSearchDateTo=' },
        pranikEgitimYorumlari: { label: 'Yorumları okuyun', url: 'https://www.thepranichealers.com/sections/reviews/item.php?type=1&id=1' }
    },
    commentsPreview: {
        title: 'Danışmanlık alanlar ne diyor?',
        readMore: 'Devamını oku',
        readAll: 'Tüm yorumları gör'
    },
    blogPreview: {
        title: 'Blog Yazıları',
        readMore: 'Devamını oku',
        readAll: 'Tüm yazıları gör'
    },

    postsPerPage: 5
};



export default siteConfig;


