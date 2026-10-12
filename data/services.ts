export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category: "Growth & Search" | "Paid Media" | "Technology" | "Creative";
  deliverables: string[];
  metricsHighlight: string;
  actionHref: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDescription:
      "Achieve defensible rankings and sustainable organic demand through deep technical audits, high-intent keyword clustering, and semantic content architecture.",
    iconName: "Search",
    category: "Growth & Search",
    deliverables: [
      "Technical Core Web Vitals Optimization",
      "High-Intent Keyword Research & Mapping",
      "Authoritative Backlink Acquisition",
      "Local SEO & Google Business Optimization",
    ],
    metricsHighlight: "+250% Organic Traffic Growth",
    actionHref: "#audit",
  },
  {
    id: "paid-ads",
    title: "Performance Marketing & Paid Advertising",
    shortDescription:
      "Turn ad spend into measurable revenue with multi-channel paid acquisition across Google Ads, Meta, LinkedIn, and programmatic display networks.",
    iconName: "Target",
    category: "Paid Media",
    deliverables: [
      "Precision Audience Segment Modeling",
      "Creative Ad Iteration & Copywriting",
      "Bid Management & Automated Smart Bidding",
      "Full-Funnel ROAS & Attribution Modeling",
    ],
    metricsHighlight: "3.8x Average Return on Ad Spend",
    actionHref: "#audit",
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Optimization",
    shortDescription:
      "Build an engaged brand community and amplify reach with bespoke editorial storytelling, creator partnerships, and active community engagement.",
    iconName: "Share2",
    category: "Creative",
    deliverables: [
      "Visual Narrative & Content Calendar",
      "Short-Form Video & Reel Production",
      "Community Management & Moderation",
      "Social Commerce & Influencer Collaboration",
    ],
    metricsHighlight: "4.2x Engagement Rate Lift",
    actionHref: "#audit",
  },
  {
    id: "web-dev",
    title: "Website Design & Development",
    shortDescription:
      "Architect lightning-fast, conversion-first web experiences using Next.js, React, and modern Jamstack tooling engineered for search engines and user delight.",
    iconName: "Code2",
    category: "Technology",
    deliverables: [
      "Headless Next.js & React Architecture",
      "Mobile-First Responsive UI/UX Systems",
      "Sub-second Page Load & Performance Tuning",
      "WCAG 2.1 AA Accessibility Compliance",
    ],
    metricsHighlight: "98+ Google Lighthouse Score",
    actionHref: "#audit",
  },
  {
    id: "content-marketing",
    title: "Content Marketing & Editorial Strategy",
    shortDescription:
      "Establish market authority and educate prospective buyers with research-backed thought leadership, whitepapers, case studies, and editorial assets.",
    iconName: "FileText",
    category: "Growth & Search",
    deliverables: [
      "Customer Journey Topic Clustering",
      "Editorial Copywriting & Long-Form Articles",
      "Lead Magnets & Industry Benchmark Reports",
      "Multi-Channel Content Distribution",
    ],
    metricsHighlight: "3.1x Inbound Lead Velocity",
    actionHref: "#audit",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Marketing & CRO",
    shortDescription:
      "Maximize average order value and customer lifetime value with funnel checkout optimization, abandoned cart recovery, and hyper-targeted remarketing.",
    iconName: "ShoppingBag",
    category: "Paid Media",
    deliverables: [
      "Shopify & Custom Storefront Audits",
      "Cart Abandonment & Retention Sequences",
      "A/B Split Testing & Heatmap Analysis",
      "Product Catalog Feed Optimization",
    ],
    metricsHighlight: "+38% Average Cart Conversion",
    actionHref: "#audit",
  },
  {
    id: "app-dev",
    title: "Mobile & Web App Development",
    shortDescription:
      "Scale bespoke SaaS applications, enterprise client portals, and iOS/Android applications built with modern frontend frameworks and robust APIs.",
    iconName: "Smartphone",
    category: "Technology",
    deliverables: [
      "Cross-Platform React Native & Web Apps",
      "RESTful & GraphQL API Integrations",
      "Secure Authentication & Database Design",
      "CI/CD Automated Deployment Pipelines",
    ],
    metricsHighlight: "99.9% Uptime SLA Standards",
    actionHref: "#audit",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    shortDescription:
      "Craft distinct brand identities, design systems, and visual marketing assets that resonate with decision-makers and command premium positioning.",
    iconName: "Palette",
    category: "Creative",
    deliverables: [
      "Brand Identity & Visual Guidelines",
      "Comprehensive Design Tokens & Component Kits",
      "Marketing Collateral & Pitch Deck Design",
      "High-Fidelity Iconography & Vector Assets",
    ],
    metricsHighlight: "100% Bespoke Brand Direction",
    actionHref: "#audit",
  },
];
