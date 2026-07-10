import type { Metadata } from "next";
import { Fira_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://priyankathakran.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priyanka Thakran",
    template: "%s — Priyanka Thakran",
  },
  description:
    "Priyanka Thakran — computer scientist building a career in product. Writing, photography, and work at the intersection of tech, data, and management.",
  openGraph: {
    title: "Priyanka Thakran",
    description:
      "Computer scientist building a career in product. Writing, photography, and work at the intersection of tech, data, and management.",
    url: siteUrl,
    siteName: "Priyanka Thakran",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Thakran",
    description:
      "Computer scientist building a career in product. Writing, photography, and work at the intersection of tech, data, and management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${firaMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
