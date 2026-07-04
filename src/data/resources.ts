export interface ResourceLink {
  url: string;
  title: string;
  note?: string;
  ogImage?: string; // optional manual override; fetched automatically if omitted
}

// Replace/extend this list with your full set of links.
// Each card shows the site's OG cover image automatically.
// `note` appears in a tooltip on hover.
export const resources: ResourceLink[] = [
  {
    url: "https://roadmap.sh",
    title: "Developer Roadmaps",
    note: "Community-driven, open-source roadmaps for every engineering path.",
  },
  {
    url: "https://mystery.knightlab.com",
    title: "SQL Murder Mystery",
    note: "Learn SQL by solving an actual murder mystery — great interactive intro.",
  },
  {
    url: "https://distill.pub/2021/gnn-intro/",
    title: "A Gentle Introduction to Graph Neural Networks",
    note: "Beautifully interactive visual explainer of GNNs from Distill.",
  },
  {
    url: "https://gumloop.com",
    title: "Gumloop — AI Automation Framework",
    note: "No-code AI workflow automation. Great for rapid prototyping agents.",
  },
  {
    url: "https://stackai.com",
    title: "AI Agents for the Enterprise | StackAI",
    note: "Production-grade AI agents with integrations into enterprise tools.",
  },
  {
    url: "https://observablehq.com",
    title: "Observable — Creative Coding",
    note: "Browser-first JS notebooks for data viz. Best place to learn D3.",
  },
  {
    url: "https://artificialanalysis.ai",
    title: "ArtificialAnalysis.ai",
    note: "Independent LLM benchmarks — speed, quality, cost across providers.",
  },
  {
    url: "https://fullstackopen.com",
    title: "Full Stack Open",
    note: "University of Helsinki's free deep-dive into modern web dev.",
  },
  {
    url: "https://n8n.io",
    title: "n8n — Workflow Automation",
    note: "Open-source alternative to Zapier/Make. Self-hostable and extendable.",
  },
  {
    url: "https://theodinproject.com",
    title: "The Odin Project",
    note: "Free, comprehensive, project-based web dev curriculum.",
  },
  {
    url: "https://www.awwwards.com",
    title: "Awwwards",
    note: "The benchmark for creative web design — endless inspiration.",
  },
  {
    url: "https://alignmentforum.org",
    title: "AI Alignment Forum",
    note: "Technical discussion of AI safety and alignment research.",
  },
  {
    url: "https://make.com",
    title: "Make — Business Automation",
    note: "Visual workflow builder for connecting apps and automating business processes.",
  },
  {
    url: "https://ecal.ch",
    title: "ECAL — École cantonale d'art de Lausanne",
    note: "One of the best design schools in the world. Great for visual inspiration.",
  },
  {
    url: "https://index-space.org/collections/happenings",
    title: "Index Space — Happenings",
    note: "Curated design events, talks, and creative industry happenings.",
  },
];
