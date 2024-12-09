import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    // The title and description of the RSS feed. This is what will show up in the feed reader.
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
