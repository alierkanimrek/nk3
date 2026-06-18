import { type CollectionEntry } from 'astro:content';

export function sortPostsByDateDesc(postA: CollectionEntry<'blog'>|CollectionEntry<'magaza'>, postB: CollectionEntry<'blog'>|CollectionEntry<'magaza'>) {
    return new Date(postB.data.publishDate).getTime() - new Date(postA.data.publishDate).getTime();
}


export function getRandomItems<T>(items: T[], count: number = 3): T[] {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export function toUrlId(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[çÇ]/g, "c")
    .replace(/[şŞ]/g, "s")
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[öÖ]/g, "o")
    .replace(/[ıİ]/g, "i")
    .replace(/[^a-z0-9\-._~:@!$&'()*+,;=]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}


export function stripHtmlTags(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function kisalt(metin: string, kelimeSayisi: number = 30): string {
    const kelimeler = metin.trim().split(/\s+/);
    if (kelimeler.length <= kelimeSayisi) return metin;
    return kelimeler.slice(0, kelimeSayisi).join(' ') + '...';
}


export function getFirstImgSrc(html: string): string | null {
  const match = html.match(/<img[^>]+src=['"]([^'"]+)['"]/i);
  return match ? match[1] : null;
}