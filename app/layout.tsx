import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWS Cloud Practitioner - CLF-C02 สรุปย่อ",
  description:
    "สรุปเนื้อหาสำหรับสอบ AWS Certified Cloud Practitioner (CLF-C02) แบ่งตามหัวข้อ เข้าใจง่าย ทบทวนได้เร็ว",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${inter.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
