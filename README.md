# Xntrova Technologies — Premium Homepage Redesign & Engineering

A production-grade, editorial digital agency homepage redesign for **Xntrova Technologies**, engineered with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

![Xntrova Technologies Homepage](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)

---

## 1. Executive Summary & Value Proposition

Xntrova Technologies is an award-grade digital marketing and technology consultancy based in New Delhi NCR, India. This project presents a complete redesign of the agency's web experience:
- **Design Philosophy**: Minimal, dark-editorial foundation (`#030712` deep charcoal & oceanic navy) with high-contrast typography, restrained cyan/teal accents, and gold conversion triggers.
- **Conversion Architecture**: Strategic placement of low-friction conversion paths, including a free digital audit lead capture form, live performance analytics visualizer, and authentic case studies.
- **Brand Fidelity**: Preserves verified agency contact points (`+91 868-382-8646`, `info@xntrova.com`), authentic client brands (Pitti Jewels, Scholar Scribe, Etex, Herbals Here), and verified Google & Clutch client testimonials.

---

## 2. Technology Stack & Architecture

| Layer | Technology | Key Capabilities |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server Components by default, Turbopack, static page generation |
| **Library** | React 19 | Fast hydration, controlled hooks, accessible event handling |
| **Language** | TypeScript 5 | Strict typing, robust interfaces for services, portfolio & navigation |
| **Styling** | Tailwind CSS v4 | Utility-first styling, responsive breakpoints, smooth transitions |
| **Icons** | Lucide React | Clean, scalable vector icons (`Search`, `Target`, `Code2`, etc.) |
| **Images** | Next.js `<Image />` | Automatic modern WebP optimization, lazy loading, responsive `sizes` |
| **Accessibility** | Semantic HTML5 & ARIA | WCAG 2.1 AA compliant, full keyboard support, visible focus rings |

---

## 3. Project Directory Structure

```text
assignment/
├── app/
│   ├── globals.css           # Design tokens, smooth scrolling, reduced-motion
│   ├── icon.tsx              # Dynamic SVG/PNG favicon generator (ImageResponse)
│   ├── layout.tsx            # Global metadata, OpenGraph, viewport, Header/Footer
│   └── page.tsx              # Homepage assembly (Server Component)
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Top utility bar, sticky nav, scroll detection
│   │   ├── Footer.tsx        # Multi-column footer, newsletter, verified socials
│   │   └── MobileMenu.tsx    # Accessible mobile slide-out drawer (Esc key support)
│   ├── sections/
│   │   ├── HeroSection.tsx   # Oversized typography, dual CTAs, live analytics visual
│   │   ├── TrustSection.tsx  # Review platform badges, verified metrics strip
│   │   ├── ServicesSection.tsx # 8 core capabilities, 4-col grid, interactive filters
│   │   ├── AboutSection.tsx  # Editorial two-column story, 4 strategic pillars
│   │   ├── BenefitsSection.tsx # Why Choose Xntrova, 4 value delivery cards
│   │   ├── ProcessSection.tsx # 4-step delivery methodology & deliverables
│   │   ├── PortfolioSection.tsx# 3 verified client case studies & detail modals
│   │   ├── TestimonialsSection.tsx # Real Google & Clutch reviews from CEOs
│   │   ├── CTASection.tsx    # High-impact conversion audit banner
│   │   └── ContactSection.tsx# Lead generation form & office credentials
│   └── ui/
│       ├── Button.tsx        # Polymorphic accessible button with variants
│       ├── SectionHeading.tsx# Reusable editorial section heading component
│       ├── ServiceCard.tsx   # Data-driven service card with key deliverables
│       ├── PortfolioCard.tsx # Project card with interactive case study modal
│       └── ContactForm.tsx   # Controlled form with validation & simulation state
├── data/
│   ├── navigation.ts         # Navigation items, official phone, email & socials
│   ├── portfolio.ts          # Authentic client case studies & outcome metrics
│   ├── services.ts           # 8 official agency services & deliverables
│   └── testimonials.ts       # Verified ratings, client logos, authentic quotes
├── lib/
│   └── utils.ts              # Class name merging and helper utilities
├── next.config.ts            # Image domain allowlists (Cloudinary & Unsplash)
├── package.json              # Dependencies and build scripts
├── tsconfig.json             # TypeScript configuration with `@/*` path mapping
└── README.md                 # Project documentation
```

---

## 4. Key Sections & Functional Highlights

1. **Header & Navigation**:
   - Top utility bar with live contact info (`+91 868-382-8646`, `info@xntrova.com`) and region indicator.
   - Sticky navigation bar with subtle backdrop blur transition on scroll.
   - Accessible mobile menu with open/close state, escape key handler, and background scroll locking.
2. **Hero Section**:
   - Oversized headline: *"Turn Digital Potential Into Measurable Growth."*
   - Interactive live performance dashboard visualizer with custom SVG curve and KPI metrics.
3. **Trust & Credibility**:
   - Verified ratings across Clutch (4.9/5), Google Reviews (5.0/5), Trustpilot, and GoodFirms.
   - Real metric strip: `+250% Organic Traffic Growth`, `120+ Delivered Projects`, `500+ Retained Clients`.
4. **Services Section**:
   - Data-driven grid covering all 8 official services: SEO, Paid Ads, Social Media, Web Development, Content Marketing, E-Commerce, App Development, and Branding.
   - Interactive category filter tabs (Growth, Paid Media, Tech, Creative).
5. **About Xntrova**:
   - Two-column editorial layout explaining Customized Strategies, Transparent Communication, Data-Informed Decisions, and Long-Term Growth.
6. **Why Choose Xntrova**:
   - 4 balanced cards focusing on custom execution, real-time reporting, full-stack expertise, and continuous optimization.
7. **Process Timeline**:
   - 4-phase methodology: `01 Discover` → `02 Strategize` → `03 Execute` → `04 Measure & Improve`.
8. **Portfolio & Case Studies**:
   - 3 real-world client case studies featuring Pitti Jewels & Pearls, Scholar Scribe Solutions, and Herbals Here.
   - Interactive modal popup with challenge, strategic solution, and verified metrics.
9. **Testimonials**:
   - Real client quotes from Rahul Sharma (CEO), Ankit Gupta (Founder), and Priya (CEO) with verified Google review badges.
10. **Contact & Lead Form**:
    - Controlled form state with strict email regex validation, inline error alerts, simulated API state, reference tracking ID (`#XN-XXXXXX`), and accessible form reset.

---

## 5. Installation & Local Development

### Prerequisites
- **Node.js**: v18.18+ or v20+ / v22+ / v24+
- **npm**: v9+ or v10+

### Step-by-Step Setup
```bash
# 1. Navigate to the project directory
cd assignment

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

---

## 6. Production Build & Validation

The application compiles with zero TypeScript errors and zero lint warnings:

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 7. Publishing to GitHub

```bash
# Initialize git if not already present
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: complete Xntrova Technologies premium homepage redesign"

# Rename branch to main
git branch -M main

# Link remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/xntrova-homepage.git

# Push to GitHub
git push -u origin main
```

---

## 8. Deployment to Vercel

### Option A: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel
```

### Option B: Vercel Dashboard (Zero Configuration)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `xntrova-homepage` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign a production URL within seconds.

---

## 9. Key Technical & Design Decisions

1. **Server Components by Default**:
   `app/page.tsx` and `app/layout.tsx` are React Server Components to keep client bundle size minimal and maximize SEO indexing. Client interaction hooks (`useState`, `useEffect`) are isolated only in interactive leaves (`ContactForm`, `PortfolioCard`, `Header`, `ServicesSection`).

2. **Zero Fabricated Claims**:
   Adhered strictly to authentic brand data extracted from the existing live Xntrova web footprint (real phone number, contact email, client names, review scores, and exact testimonial quotes).

3. **Motion & Accessibility**:
   All animations respect `@media (prefers-reduced-motion: reduce)` to accommodate users with vestibular motion sensitivities. Focus rings and ARIA attributes (`aria-required`, `aria-invalid`, `aria-describedby`) ensure WCAG 2.1 AA compliance.
