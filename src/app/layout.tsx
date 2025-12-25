import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

/**
 * Font Optimization with Next.js
 * 
 * Next.js provides automatic font optimization through next/font/google.
 * This optimizes font loading by:
 * - Self-hosting fonts (no external requests)
 * - Eliminating layout shift during font loading
 * - Reducing Cumulative Layout Shift (CLS)
 * 
 * The 'variable' property creates a CSS variable that can be used in Tailwind config
 * to apply the font throughout the application.
 */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora", // Creates CSS variable: --font-lora
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Creates CSS variable: --font-poppins
});
/**
 * SEO Metadata Configuration
 * 
 * Next.js 13+ App Router uses the Metadata API for SEO optimization.
 * This metadata object is exported and used by Next.js to generate:
 * - <title> tags
 * - <meta> tags for SEO
 * - Open Graph tags (for social media sharing)
 * - Twitter Card tags
 * - Structured data
 * 
 * metadataBase: Base URL for all relative URLs in metadata
 * title.template: Allows child pages to set their own title with this template
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://restaurant-ts-arnob.vercel.app"),
  title: {
    default: "WU'S Garden - A Taste of Local Flavors | Premium Restaurant",
    template: "%s | WU'S Garden", // Child pages can use: title: "Menu" → "Menu | WU'S Garden"
  },
  description:
    "Experience authentic local flavors at WU'S Garden by Wildow Brew. Discover our premium menu featuring Stilton and pancetta penne, Chorizo and avocado spaghetti, and more. Book your table today for an unforgettable dining experience.",
  keywords: [
    "restaurant",
    "fine dining",
    "local flavors",
    "WU'S Garden",
    "Wildow Brew",
    "restaurant menu",
    "book a table",
    "reservation",
    "gourmet food",
    "Italian cuisine",
    "premium restaurant",
    "dining experience",
    "food delivery",
    "restaurant near me",
    "best restaurant",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://arnob-mahmud.vercel.app/",
    },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/logo.svg"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://restaurant-ts-arnob.vercel.app",
    siteName: "WU'S Garden",
    title: "WU'S Garden - A Taste of Local Flavors | Premium Restaurant",
    description:
      "Experience authentic local flavors at WU'S Garden by Wildow Brew. Discover our premium menu and book your table today for an unforgettable dining experience.",
    images: [
      {
        url: "/hero/plate.png",
        width: 1200,
        height: 630,
        alt: "WU'S Garden - Premium Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WU'S Garden - A Taste of Local Flavors",
    description:
      "Experience authentic local flavors at WU'S Garden by Wildow Brew. Book your table today!",
    images: ["/hero/plate.png"],
    creator: "@arnobt78",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "restaurant",
  alternates: {
    canonical: "https://restaurant-ts-arnob.vercel.app",
  },
};

/**
 * RootLayout Component
 * 
 * This is the root layout component in Next.js App Router.
 * It wraps all pages and provides:
 * - HTML structure (<html>, <body>)
 * - Global fonts via CSS variables
 * - Shared layout elements
 * 
 * The font variables are applied to the body, making them available
 * throughout the app via Tailwind's font-lora and font-poppins classes.
 * 
 * @param {React.ReactNode} children - All page content that will be rendered
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Font variables are applied here, accessible via Tailwind classes */}
      <body className={`${lora.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
