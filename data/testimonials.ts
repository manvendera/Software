export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  platform: "Google Reviews" | "Clutch" | "Trustpilot";
  initial: string;
  avatarBg: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Chief Executive Officer",
    quote:
      "Xntrova is truly the best digital marketing agency in Delhi. Their team brought fresh ideas and clear directions for our business. They listened to all of our concerns and created their strategies accordingly, and the results they delivered were beyond expectations.",
    rating: 5,
    platform: "Google Reviews",
    initial: "R",
    avatarBg: "bg-sky-600",
    verified: true,
  },
  {
    id: "ankit-gupta",
    name: "Ankit Gupta",
    role: "Founder",
    quote:
      "What sets Xntrova apart is the way they combine expertise with a human touch. They celebrate your wins, tackle challenges alongside you, and remain focused on creating long-term value. It’s the kind of partnership every growing business hopes to find.",
    rating: 5,
    platform: "Google Reviews",
    initial: "A",
    avatarBg: "bg-teal-700",
    verified: true,
  },
  {
    id: "priya-ceo",
    name: "Priya",
    role: "Chief Executive Officer",
    quote:
      "What started as a simple project quickly turned into a long-term partnership. The team of Xntrova was approachable, proactive, and always willing to explore new ideas. Their dedication and attention to detail gave us confidence that our brand was in the right hands.",
    rating: 5,
    platform: "Google Reviews",
    initial: "P",
    avatarBg: "bg-amber-600",
    verified: true,
  },
];

export const TRUST_METRICS = [
  { label: "Organic Traffic Growth", value: "+250%", note: "Verified Client Average" },
  { label: "Delivered Client Projects", value: "120+", note: "Across Delhi NCR & Global" },
  { label: "Happy Long-Term Clients", value: "500+", note: "Retained Partnerships" },
  { label: "Average Review Rating", value: "4.9/5", note: "Across Google & Clutch" },
];

export const REVIEW_PLATFORMS = [
  { name: "Google Reviews", score: "5.0 ★", reviewCount: "80+ Reviews" },
  { name: "Clutch", score: "4.9 ★", reviewCount: "Top Agency Delhi" },
  { name: "Trustpilot", score: "4.8 ★", reviewCount: "Verified Ratings" },
  { name: "GoodFirms", score: "4.9 ★", reviewCount: "Top Performer" },
  { name: "DesignRush", score: "Top 10", reviewCount: "Digital Agencies" },
];

export const CLIENT_LOGOS = [
  { name: "Scholar Scribe Solutions", tag: "EdTech & Education" },
  { name: "Etex", tag: "Industrial & Manufacturing" },
  { name: "Onsa", tag: "Consumer Products" },
  { name: "Herbals Here", tag: "Wellness & Healthcare" },
  { name: "Range Lilies", tag: "Lifestyle & Apparel" },
  { name: "Pitti Jewels & Pearls", tag: "Luxury Jewelry" },
];
