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
    url: "https://distill.pub",
    title: "Distill — Latest Articles About Machine Learning",
    note: "Peer-reviewed journal for clear, interactive explanations of ML research.",
  },
  {
    url: "https://distill.pub/2021/gnn-intro/",
    title: "A Gentle Introduction to Graph Neural Networks",
    note: "Beautifully interactive visual explainer of GNNs from Distill.",
  },
  {
    url: "https://playground.tensorflow.org",
    title: "TensorFlow — Neural Network Playground",
    note: "Interactive neural net in the browser by Daniel Smilkov and Shan Carter.",
  },
  {
    url: "https://developer.apple.com/documentation/accelerate",
    title: "Accelerate | Apple Developer Documentation",
    note: "Apple's high-performance math and ML framework for CPU/GPU acceleration.",
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
  {
    url: "https://fabric.so",
    title: "Fabric: AI Workspace for Designers",
    note: "One home for everything — files, links, notes, and AI in one canvas.",
  },
  {
    url: "https://fuser.io",
    title: "Fuser — Every AI Model. Every Medium. One Canvas.",
    note: "Creative AI canvas: text, image, and video generation in one place.",
  },
  {
    url: "https://help.figma.com/hc/en-us",
    title: "Figma Learn — Help Center",
    note: "Official Figma documentation, tutorials, and learning resources.",
  },
  {
    url: "https://research.google/resources/",
    title: "Resources — Google Research",
    note: "Papers, datasets, and tools published by Google Research.",
  },
  {
    url: "https://aigoodies.design",
    title: "ai goodies ✨",
    note: "Curated collection of AI tools and resources for designers.",
  },
  {
    url: "https://designsystems.surf",
    title: "Design Systems Database & Gallery",
    note: "Browse top-notch design systems from companies worldwide.",
  },
];
