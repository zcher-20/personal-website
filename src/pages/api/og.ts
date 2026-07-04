import type { APIRoute } from "astro";

const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function resolveUrl(raw: string, base: string): string | null {
  try {
    if (!raw || raw.startsWith("data:")) return null;
    if (raw.startsWith("//")) return "https:" + raw;
    if (raw.startsWith("http")) return raw;
    return new URL(raw, base).href;
  } catch {
    return null;
  }
}

function extractOgImage(html: string, base: string): string | null {
  // All attribute-order permutations for og:image and twitter:image
  const patterns = [
    /property=["']og:image["'][^>]*\scontent=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*\sproperty=["']og:image["']/i,
    /property=["']og:image:url["'][^>]*\scontent=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*\sproperty=["']og:image:url["']/i,
    /name=["']twitter:image["'][^>]*\scontent=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*\sname=["']twitter:image["']/i,
    /name=["']twitter:image:src["'][^>]*\scontent=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*\sname=["']twitter:image:src["']/i,
  ];
  for (const pat of patterns) {
    const m = html.match(pat);
    if (m?.[1]) {
      const resolved = resolveUrl(m[1], base);
      if (resolved) return resolved;
    }
  }
  return null;
}

function sameDomain(a: string, b: string): boolean {
  try {
    const ha = new URL(a).hostname.replace(/^www\./, "");
    const hb = new URL(b).hostname.replace(/^www\./, "");
    return ha === hb;
  } catch { return false; }
}

async function fetchDirect(target: string): Promise<string | null> {
  const res = await fetch(target, {
    headers: {
      "User-Agent": BROWSER_UA,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
    signal: AbortSignal.timeout(9000),
    redirect: "follow",
  });
  if (!res.ok) return null;
  // Discard result if we were silently redirected to a completely different domain
  if (!sameDomain(target, res.url)) return null;
  const html = await res.text();
  return extractOgImage(html, res.url);
}

async function fetchViaOembed(target: string): Promise<string | null> {
  // Microlink free tier — reliable OG extraction with headless rendering
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(target)}&meta=true`;
  const res = await fetch(apiUrl, {
    headers: { "User-Agent": BROWSER_UA },
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) return null;
  const data = await res.json() as { data?: { image?: { url?: string }; screenshot?: { url?: string } } };
  return data?.data?.image?.url ?? data?.data?.screenshot?.url ?? null;
}

export const GET: APIRoute = async ({ url }) => {
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response(JSON.stringify({ ogImage: null }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let ogImage: string | null = null;

  // 1. Try direct HTML fetch
  try { ogImage = await fetchDirect(target); } catch {}

  // 2. Fall back to Microlink if direct fetch returned nothing
  if (!ogImage) {
    try { ogImage = await fetchViaOembed(target); } catch {}
  }

  return new Response(JSON.stringify({ ogImage }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=604800, s-maxage=604800",
    },
  });
};
