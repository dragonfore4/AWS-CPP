import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Thai,
  IBM_Plex_Serif,
  Noto_Serif_Thai,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { themeScript, fontSizeScript, navLayoutScript } from "@/lib/themeScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifThai = Noto_Serif_Thai({
  variable: "--font-noto-serif-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWS Cloud Practitioner — บันทึกย่อ CLF-C02",
  description:
    "บันทึกย่อระหว่างเตรียมสอบ AWS Cloud Practitioner (CLF-C02) อิงโครงคอร์สของ Stephane Maarek บน Udemy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansThai.variable} ${plexSerif.variable} ${notoSerifThai.variable} ${geistMono.variable} h-full`}
    >
      <head>
        {/* Theme + nav layout must be applied before paint to prevent FOUC. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: navLayoutScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)] font-md"
      >
        <script dangerouslySetInnerHTML={{ __html: fontSizeScript }} />
        {children}
      </body>
    </html>
  );
}
