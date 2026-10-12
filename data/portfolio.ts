export interface PortfolioProject {
  id: string;
  title: string;
  category: "Website Development" | "Performance Marketing" | "Brand Identity & Creative";
  client: string;
  isVerifiedClient: boolean;
  description: string;
  impact: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  details: {
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "pitti-jewels-storefront",
    title: "Luxury E-Commerce & Next-Gen Digital Storefront",
    category: "Website Development",
    client: "Pitti Jewels & Pearls",
    isVerifiedClient: true,
    description:
      "Engineered an editorial luxury commerce platform with sub-second page transitions, dynamic currency routing, and bespoke high-conversion checkout flows.",
    impact: "+180% Mobile Conversions",
    tags: ["Next.js", "Headless Commerce", "UI/UX Architecture", "Tailwind CSS"],
    imageSrc:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Luxury jewelry ecommerce web design and mobile responsive interface showcase",
    details: {
      challenge:
        "The client required an elevated brand presence that bridged traditional craftsmanship with high-performing modern e-commerce checkout speed.",
      solution:
        "Redesigned the entire digital storefront with a custom Next.js App Router front-end, interactive gemstone product visualizers, and streamlined one-click checkout.",
      metrics: [
        { label: "Page Load Speed", value: "0.8s" },
        { label: "Checkout Completion", value: "+44%" },
        { label: "Organic Search Lift", value: "+190%" },
      ],
    },
  },
  {
    id: "scholar-scribe-performance",
    title: "Multi-Channel Paid Acquisition & ROAS Scale Engine",
    category: "Performance Marketing",
    client: "Scholar Scribe Solutions",
    isVerifiedClient: true,
    description:
      "Architected algorithmic Google Search & Meta paid acquisition campaigns with behavioral lookalike modeling and high-converting landing page experiences.",
    impact: "3.8x Blended ROAS",
    tags: ["Google Ads", "Meta Business", "Funnel CRO", "Analytics & Attribution"],
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Digital marketing analytics dashboard displaying revenue attribution and campaign ROAS metrics",
    details: {
      challenge:
        "Scaling student and academic institutional client acquisition without ballooning cost-per-lead (CPL) during high-competition intake periods.",
      solution:
        "Implemented high-intent keyword negative matching, dynamic intent-based ad copy, automated bid scheduling, and hyper-targeted lead magnet funnels.",
      metrics: [
        { label: "Cost-Per-Lead (CPL)", value: "-36%" },
        { label: "Qualified Lead Volume", value: "+215%" },
        { label: "Target ROAS", value: "3.8x" },
      ],
    },
  },
  {
    id: "herbals-here-brand-seo",
    title: "Holistic Organic Growth & Visual Brand Identity System",
    category: "Brand Identity & Creative",
    client: "Herbals Here",
    isVerifiedClient: true,
    description:
      "Complete visual identity overhaul combined with technical SEO architecture, topical entity mapping, and sustainable customer packaging design.",
    impact: "+250% Organic Traffic",
    tags: ["Brand Identity", "Technical SEO", "Packaging Design", "Content Architecture"],
    imageSrc:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Creative branding system, typography hierarchy, and corporate identity guidelines",
    details: {
      challenge:
        "Outdated brand recognition and lack of indexation for crucial wellness search queries in the competitive wellness and organic healthcare landscape.",
      solution:
        "Created an organic, editorial brand guidelines kit, overhauled website information architecture, and deployed structured schema markup across 200+ products.",
      metrics: [
        { label: "Page 1 Keyword Rankings", value: "140+" },
        { label: "Monthly Organic Clicks", value: "85K+" },
        { label: "Brand Recall Rate", value: "+72%" },
      ],
    },
  },
];
