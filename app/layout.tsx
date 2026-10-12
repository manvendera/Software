import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xntrova Technologies — Premier Digital Marketing & Technology Agency",
  description:
    "Scale your business with Xntrova Technologies. Leading digital marketing, SEO, performance paid advertising, web design, and digital engineering agency in Delhi NCR.",
  keywords: [
    "Digital Marketing Agency Delhi NCR",
    "Xntrova Technologies",
    "SEO Services Delhi",
    "Performance Marketing Agency",
    "Web Design and Development",
    "E-Commerce Growth Marketing",
    "PPC Advertising Agency",
  ],
  authors: [{ name: "Xntrova Technologies" }],
  creator: "Xntrova Technologies",
  publisher: "Xntrova Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Xntrova Technologies — Premier Digital Marketing & Technology Agency",
    description:
      "Turn digital potential into measurable growth with high-performing SEO, PPC, brand design, and web development.",
    url: "https://www.xntrova.com",
    siteName: "Xntrova Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xntrova Technologies — Premier Digital Marketing & Technology Agency",
    description:
      "Turn digital potential into measurable growth with high-performing SEO, PPC, brand design, and web development.",
    creator: "@xntrova",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans selection:bg-sky-500 selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
