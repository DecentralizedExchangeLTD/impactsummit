import Script from "next/script";
import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Impact Summit",
  description:
    "Impact Summit where we showcase various projects, organizations, and individuals that have impacted the community in a positive and noticeable way through the year. Join us to learn more about Public Goods, ReFi, Carbon Credits and more.",
  generator: "Next.js",
  applicationName: "Impact-Summit",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  },
  keywords: [
    "hackathon",
    "web3",
    "2023",
    "impact",
    "2024",
    "nigeria",
    "greenpill",
    "network",
    "greenpill nigeria",
    "event",
    "blockchain",
    "PGN",
    "public goods network",
    "public goods",
    "governance",
    "treegens",
    "ReFi",
    "networking",
    "summit",
    "africa",
    "competition",
    "innovation",
    "empower",
    "impact summit 2023",
    "impact hack 2023",
    "decentralized exchange ltd",
    "decentralizedceo",
    "sylvia hotel",
    "EIP 4337",
    "1st november 2023",
    "1st december 2023",
    "9th december 2023",
  ],
  authors: [
    { name: "Chuku Success", url: "https://twitter.com/Ulquiorra_ciffa" },
    { name: "Decentralized CEO", url: "https://twitter.com/izzylawrence11" },
  ],
  creator: "Chuku Success",
  publisher: "Decentralized CEO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Impact Summit",
    description:
      "Impact Summit where we showcase various projects, organizations, and individuals that have impacted the community in a positive and noticeable way through the year. Join us to learn more about Public Goods, ReFi, Carbon Credits and more.",
    url: "https://impactsummit.network",
    siteName: "Impact Summit Network",
    images: [
      { url: "", alt: "Impact Summit Network", width: 800, height: 600 },
      { url: "", alt: "Impact Summit Network", width: 1800, height: 1600 },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Impact Summit Network",
    description:
      "Impact Summit where we showcase various projects, organizations, and individuals that have impacted the community in a positive and noticeable way through the year. Join us to learn more about Public Goods, ReFi, Carbon Credits and more.",
    site: "",
    creator: "@Ulquiorra_ciffa",
    images: [""],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google analytics tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TMST84VMJP"
      ></Script>
      <Script strategy="afterInteractive" id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); 
        gtag('config', 'G-TMST84VMJP');`}
      </Script>
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
