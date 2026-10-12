import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Delhi NCR - Xntrova",
  description:
    "Grow your business with Xntrova – the Best Digital Marketing Company in Delhi NCR offering expert Digital Marketing Services.",
  keywords: [
    "Digital Marketing Agency Delhi NCR",
    "Xntrova",
    "SEO Services Delhi",
    "PPC Advertising Agency",
    "Website Development Delhi",
    "Social Media Optimization",
    "E-Commerce Marketing",
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
    title: "Best Digital Marketing Company in Delhi NCR - Xntrova",
    description:
      "Grow your business with Xntrova – the Best Digital Marketing Company in Delhi NCR offering expert Digital Marketing Services.",
    url: "https://www.xntrova.com",
    siteName: "Xntrova",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Delhi NCR - Xntrova",
    description:
      "Grow your business with Xntrova – the Best Digital Marketing Company in Delhi NCR offering expert Digital Marketing Services.",
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
  themeColor: "#001F2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#101820] antialiased selection:bg-[#0075a2] selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
