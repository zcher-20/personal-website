import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response(JSON.stringify({ ogImage: null }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  try {
    const res = await fetch(target, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Twitterbot/1.0)" },
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });
    const html = await res.text();

    const patterns = [
      /property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
      /content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
      /name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i,
      /content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i,
      /name=["']twitter:image:src["'][^>]*content=["']([^"']+)["']/i,
      /content=["']([^"']+)["'][^>]*name=["']twitter:image:src["']/i,
    ];

    let ogImage: string | null = null;
    for (const pat of patterns) {
      const m = html.match(pat);
      if (m?.[1]) {
        ogImage = m[1];
        // Resolve relative URLs
        if (ogImage.startsWith("/")) {
          const base = new URL(target);
          ogImage = `${base.protocol}//${base.host}${ogImage}`;
        }
        break;
      }
    }

    return new Response(JSON.stringify({ ogImage }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=604800, s-maxage=604800",
      },
    });
  } catch {
    return new Response(JSON.stringify({ ogImage: null }), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
