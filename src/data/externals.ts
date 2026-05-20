import type { Iframe } from '../types';
import { Category } from '../types';

export const iframes: Record<string, Iframe> = {
    IkızKalplerMeditasyonu1: { src: 'QsTZBxHihlg?si=LsvsrgGP5tVz5VsM', category: Category.IkizKalplerMeditasyonu, allowRandom: false },
    IkızKalplerMeditasyonu2: { src: 'K3tfzeTZjnw?si=kFPdZQJZQWPN5qo_', category: Category.IkizKalplerMeditasyonu, allowRandom: true },
    IkızKalplerMeditasyonu3: { src: '7RTvt6EkYik?si=s49WtfxyB97PLA06', category: Category.IkizKalplerMeditasyonu, allowRandom: true },
    IkızKalplerMeditasyonu4: { src: 'SRRsOeO1RNU?si=y7Is0f5nS_ZBtU95', category: Category.IkizKalplerMeditasyonu, allowRandom: true },  
    
    PranikSifaEgitimi1: { src: 'sMOP3eanAyU?si=s43QXYn8-eMjfpAX', category: Category.PranikSifaEgitimi, allowRandom: true },
    PranikSifaEgitimi2: { src: 'ebXVV8_xo2c?si=mBQrAw74IHZxp6-m', category: Category.PranikSifaEgitimi, allowRandom: true },
    
    PranikSifaDanismanligi1: { src: 'JPsRIwVznnQ?si=nmoEU_K2CNzYNWv4', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi2: { src: '2rQmVXVhSvA?si=hekIYEPfgsGIQmMd', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi3: { src: 'R2J-OU2s2oI?si=cOpJwGnCnU6B_Et6', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi4: { src: '9n8sXo2l7jA?si=5e1mNqj6a9u8Zt0b', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi5: { src: 'x01m9fwtEi4?si=WTkF26lZdHtiAzaW', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi6: { src: 'txi_298ZK84?si=3a72aXwIfpZZRsLg', category: Category.PranikSifaDanismanligi, allowRandom: true },
    PranikSifaDanismanligi7: { src: 'LaPecPUIyfg?si=7XQ5e5yu8U5OBx-N', category: Category.PranikSifaDanismanligi, allowRandom: true },

    
    PranikYuzGermeVucutSekillendirme1: { src: 'c6RwDXRwbQ8?si=cyjvm7XaSXRV1aRa', category: Category.PranikYuzGermeVucutSekillendirme, allowRandom: true },
    PranikYuzGermeVucutSekillendirme2: { src: 'dxwOxJClknQ?si=xy24Ilzy3vkBctcN', category: Category.PranikYuzGermeVucutSekillendirme, allowRandom: true },
    PranikYuzGermeVucutSekillendirme3: { src: 'DOsFbtoHCAg?si=wS6PIV2anWwin8aM', category: Category.PranikYuzGermeVucutSekillendirme, allowRandom: true },
    PranikYuzGermeVucutSekillendirme4: { src: 'TXAx6f8YFv8?si=V_7yo3RMMXrYrRU1', category: Category.PranikYuzGermeVucutSekillendirme, allowRandom: true },
    PranikYuzGermeVucutSekillendirme5: { src: 'omrSShvDQ-8?si=yc5o8LD8O0KvsC27', category: Category.PranikYuzGermeVucutSekillendirme, allowRandom: true },
    
    NumerolojiDanismanligi1: { src: 'qTiVMSGq2EA?si=mcpLxOY7CALx58D7', category: Category.NumerolojiDanismanligi, allowRandom: true },
    NumerolojiDanismanligi2: { src: 'gY4d5ce4wc0?si=mfTyiaMBcgSBwt5b', category: Category.NumerolojiDanismanligi, allowRandom: true },
    NumerolojiDanismanligi3: { src: 'XQz0rXdftCo?si=zbNA8i4YNPAChKka', category: Category.NumerolojiDanismanligi, allowRandom: true },
    NumerolojiDanismanligi4: { src: 'QGM_vBOCUjw?si=N2Ke9BbajC95Zukz', category: Category.NumerolojiDanismanligi, allowRandom: true },
    NumerolojiDanismanligi5: { src: 'bo6XujqttAw?si=Ve4oQDnolz-iBIen', category: Category.NumerolojiDanismanligi, allowRandom: true },
    
    AileDanismanligi1: { src: '-AG9Z5wqJak?si=OOnCFgn1kfNk2o0y', category: Category.AileDanismanligi, allowRandom: true },
    AileDanismanligi2: { src: 'Kiaib25JRQY?si=HL1o_rI1cWFzaeUS', category: Category.AileDanismanligi, allowRandom: true },
    AileDanismanligi3: { src: '9n8sXo2l7jA?si=5e1mNqj6a9u8Zt0b', category: Category.AileDanismanligi, allowRandom: true },
    AileDanismanligi4: { src: 'oJuQHHwoJGM?si=0isPazyPI_WDxv1v', category: Category.AileDanismanligi, allowRandom: true },
    AileDanismanligi5: { src: 'FLq6bhcDWBI?si=E4dj0tQtVEyjRWD7', category: Category.AileDanismanligi, allowRandom: true },

    
};


export const IkizKalplerMeditasyonuIframes = Object.values(iframes).filter(
  (item) => item.category === Category.IkizKalplerMeditasyonu && item.allowRandom === true
);
export const PranikSifaDanismanligiIframes = Object.values(iframes).filter(
  (item) => item.category === Category.PranikSifaDanismanligi && item.allowRandom === true
);
export const AileDanismanligiIframes = Object.values(iframes).filter(
  (item) => item.category === Category.AileDanismanligi && item.allowRandom === true
);
export const NumerolojiDanismanligiIframes = Object.values(iframes).filter(
  (item) => item.category === Category.NumerolojiDanismanligi && item.allowRandom === true
);
export const PranikSifaEgitimiIframes = Object.values(iframes).filter(
  (item) => item.category === Category.PranikSifaEgitimi && item.allowRandom === true
);
export const PranikYuzGermeVucutSekillendirmeIframes = Object.values(iframes).filter(
  (item) => item.category === Category.PranikYuzGermeVucutSekillendirme && item.allowRandom === true
);
