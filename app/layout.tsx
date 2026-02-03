import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "무드플리 - 내 상황 맞춤 음악 검색",
  description: "당신의 상황과 기분에 딱 맞는 플레이리스트를 찾아보세요",
  keywords: "플레이리스트, 음악 검색, 유튜브 플레이리스트, 상황별 음악, 기분별 음악",
  authors: [{ name: "무드플리" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-3344724775911260",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased flex flex-col min-h-screen">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3344724775911260"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
