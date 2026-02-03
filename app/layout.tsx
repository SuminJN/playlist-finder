import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "지금 플레이리스트 - 내 상황 맞춤 음악 검색",
  description: "당신의 상황과 기분에 딱 맞는 플레이리스트를 찾아보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
