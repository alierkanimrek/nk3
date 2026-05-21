import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { gunzipSync } from 'zlib';
import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';

import type { NumerolojiYorum, PranikBlog, PranikYorum, SiteContent } from '../types';
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const __dirname = dirname(fileURLToPath(import.meta.url));


const siteContent: SiteContent = {
    pranikSifaDanismanligi:     {
        url: '/pranik-sifa-danismanligi',
        title: 'Pranik Şifa Danışmanlığı',
        desc: 'Fiziksel ve psikolojik rahatsızlıkların tedavisi için yapılan Pranik Şifa seansları hakkında bilgiler. Reiki ve bioenerji gibi bir çalışmadır.',
        heroTxt: '',
        navTitle: 'Seans için iletişime geçin',
        navText: 'Şifa almak istediğiniz durumu ve iletişim bilgilerinizi yazarsanız, size dönüş yapacağım.',
            hero: {
        title: 'Pranik Şifa Danışmanlığı',
        text: 'Eterik bedende yapılan bu çalışma fiziki bedenin kendini iyileştirme gücünü destekler, böylece tıbbi tedavilerden daha hızlı sonuç alınabilir. Fiziki temas, ilaç veya alet kullanılmaz. Uzaktan veya yüzyüze seans aynı ölçüde etkilidir.',
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }}
    },
    pranikYuzGermeVucutSekillendirme:     {
        url: '/pranik-yuz-germe-vucut-sekillendirme',
        title: 'Pranik Yüz Germe ve Vücut Şekillendirme Danışmanlığı',
        desc: 'Pranik Yüz Germe ve Vücut Şekillendirme seansları hakkında bilgiler. Reiki ve bioenerji gibi bir çalışmadır.',
        heroTxt: '',
        navTitle: 'Seans için iletişime geçin',
        navText: 'İletişim bilgilerinizi yazarsanız, size dönüş yapacağım.',
        hero: {
            title: 'Pranik Yüz Germe ve Vücut Şekillendirme Danışmanlığı',
            text: 'Enerji bedenindeki tıkanıklıkları temizleyip hücreleri taze enerjiyle besleyen bu çalışma, cildin ve dokuların doğal kolajen üretimini tetikler. Ameliyatsız, iğnesiz ve kimyasalsız bir gençleşme ve sıkılaşma sürecidir.',
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }},

        numerolojiDanismanligi:     {
        url: '/numeroloji-danismanligi',
        title: 'Numeroloji Danışmanlığı',
        desc: 'Numeroloji seansı hakkında bilgiler',
        heroTxt: '',
        navTitle: 'Seans için iletişime geçin',
        navText: 'Yorumlanmasını istediğiniz durumu ve iletişim bilgilerinizi yazarsanız, size dönüş yapacağım.',
            hero: {
        title: 'Numeroloji Danışmanlığı',
        text: 'Doğum tarihi ve isim analiziyle yaşamın gizli örüntüleri okunur. Tekrar eden konuları çözümlemek, kişisel potansiyeli keşfetmek ve geçmiş-geleceğe yüksek bir farkındalıkla bakabilmek için size özel sayı sembollerini yorumluyorum. Aile danışmanlığı ve pranik şifa teknikleriyle çözüme ulaşıyoruz.',
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }},

    
    pranikSifaYorumlari: {
        url: '/pranik-sifa-yorumlari',
        title: 'Pranik Şifa Yorumları',
        desc: 'Pranik Şifa seansları hakkında kullanıcı yorumları ve deneyimleri.',
        heroTxt: 'Pranik Şifa seansları hakkında kullanıcı yorumları ve deneyimleri.',
        navTitle: 'Yorum yapın',
        navText: 'Nuray Kaya\'dan aldığınız Pranik Şifa seansı deneyimlerinizi paylaşın.',
        hero: {
        title: 'Pranik Şifa Yorumları',
        text: 'Pranik Şifa seansları hakkında kullanıcı yorumları ve deneyimleri.',
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }
    },
    numerolojiYorumlari: {
        url: '/numeroloji-yorumlari',
        title: 'Numeroloji Yorumları',
        desc: 'Numeroloji seansları hakkında kullanıcı yorumları ve deneyimleri.',
        heroTxt: 'Numeroloji seansları hakkında kullanıcı yorumları ve deneyimleri.',
        navTitle: 'Yorum yapın',
        navText: 'Nuray Kaya\'dan aldığınız Numeroloji deneyimlerinizi paylaşın.',
        hero: {
        title: 'Numeroloji Yorumları',
        text: 'Numeroloji seansları hakkında kullanıcı yorumları ve deneyimleri.',
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }
    },
    pranikSifaEgitimi:     {
        url: '/pranik-sifa-egitimi',
        title: 'Pranik Şifa Eğitimi',
        desc: 'Pranik Şifa yapmayı öğrenmek için gerekli bilgiler.',
        heroTxt: '',
        navTitle: 'En yakın eğitimi bulun',
        navText: 'Dünya Pranik Şifa Vakfı tarafından düzenlenen eğitimlere göz atın.',
            hero: {
        title: 'Pranik Şifa Eğitimi',
        text: "Temel düzeyden ileri uygulamalara kadar sertifikalı eğitim programları ile kendinizi, ailenizi ve başkalarını destekleyebilecek pratik teknikler öğrenin. Fiziksel temas gerektirmeyen bu sistem herkese öğretilebilir.",
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }},
    ikizKalplerMeditasyonu:     {
        url: '/ikiz-kalpler-meditasyonu',
        title: 'İkiz Kalpler Meditasyonu',
        desc: 'İkiz Kalpler Meditasyonu ve Arhatik Yoga hakkında bilgiler.',
        heroTxt: '',
        navTitle: 'Meditasyonda bize katılın',
        navText: 'Her hafta ücretsiz online İkiz Kalpler Meditasyonu yapıyoruz. Katılmak için Instagram\'dan duyuruları takip edin.',
        hero: {
            title: 'İkiz Kalpler Meditasyonu',
            text: "Kalp ve taç çakralarını aynı anda aktive eden bu meditasyon, derin bir iç huzur ve sevgi enerjisi yaratır. Düzenli uygulamayla stres azalır, zihin berraklaşır ve manevi farkındalık gelişir. Her hafta ücretsiz online ve yüz yüze meditasyonlar düzenliyorum.",
        avatar: {
            src: heroAvatar,
            alt: 'Nuray Kaya'
        },
        backgroundImage: {
            src: heroBackground
        }
    }},
    aileDanismanligi :     {
        url: '/aile-danismanligi',
        title: 'Aile Danışmanlığı',
        desc: 'Aile danışmanlığı hizmetleri hakkında bilgiler.',
        heroTxt: '',
        navTitle: 'Sorununuzu paylaşın',
        navText: 'Size nasıl yardımcı olabileceğimi öğrenmek için iletişime geçin.',
        hero: {
            title: 'Aile Danışmanlığı',
            text: 'Aile bireylerinin birbirleriyle olan ilişkilerindeki örüntüleri ve çatışma noktalarını güvenli bir ortamda ele alır. Hem bireysel hem de aile olarak katılım mümkündür. Temel numerolojik analizler ve ileri pranik şifa teknikleriyle destekleyerek çok yönlü bir çözüm sunuyorum.',
            avatar: {
                src: heroAvatar,
                alt: 'Nuray Kaya'
            },
            backgroundImage: {
                src: heroBackground
            }
        }
    },
    yazilar: {
        url: '/yazilar',
        title: 'Yazılar',
        desc: 'Pranik Şifa ve Arhatik Yoga hakkında makaleler',
        heroTxt: '',
        navTitle: 'Yazılara göz atın',
        navText: 'Pranik Şifa hakkında makaleler okuyun.',
        hero: {
            title: 'Pranik Şifa ve Arhatik Yoga hakkında makaleler.',
            text: '',
            avatar: {
                src: heroAvatar,
                alt: 'Nuray Kaya'
            },
            backgroundImage: {
                src: heroBackground
            }
        }
    }


};

let pranikYorum : PranikYorum[] = [];
let numerolojiYorum : NumerolojiYorum[] = [];
let pranikBlog : PranikBlog[] = [];

try {
    pranikYorum = JSON.parse(gunzipSync(new Uint8Array(readFileSync(join(process.cwd(), 'public/pranik_yorum.bin').replace(/\/$/, '')))).toString());
} catch (error) {    
    console.error('Pranik yorumları yüklenirken hata oluştu:', error);
}
try {
    numerolojiYorum = JSON.parse(gunzipSync(new Uint8Array(readFileSync(join(process.cwd(), 'public/num_yorum.bin').replace(/\/$/, '')))).toString());
} catch (error) {
    console.error('Numeroloji yorumları yüklenirken hata oluştu:', error);
}
try {
    pranikBlog = JSON.parse(gunzipSync(new Uint8Array(readFileSync(join(process.cwd(), 'public/pranik_blog.bin').replace(/\/$/, '')))).toString());
} catch (error) {
    console.error('Pranik blog yazıları yüklenirken hata oluştu:', error);
}

export { numerolojiYorum, pranikBlog, pranikYorum };

export default siteContent


