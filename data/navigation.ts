export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Xntrova", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_INFO = {
  phone: "+91 868-382-8646",
  phoneRaw: "+918683828646",
  email: "info@xntrova.com",
  location: "Delhi NCR, India",
  fullAddress: "Plot 14, Commercial District, Sector 62, Noida, Delhi NCR 201301",
  hours: "Mon – Fri: 9:30 AM – 6:30 PM IST",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/xntrova/",
      label: "Follow Xntrova on LinkedIn",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/xntrova.agency/",
      label: "Follow Xntrova on Instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/xntrova/",
      label: "Like Xntrova on Facebook",
    },
    {
      name: "Twitter",
      href: "https://x.com/xntrova",
      label: "Follow Xntrova on Twitter",
    },
  ],
};
