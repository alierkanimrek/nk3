import rss from '@astrojs/rss';
import siteConfig from '../data/site-config';
import siteContent from '../data/site-content';

export async function GET(context) {
    const pages = Object.values(siteContent);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: pages.map((item) => ({
            title: item.title,
            description: item.description,
            link: `${item.url}`
        }))
    });
}
