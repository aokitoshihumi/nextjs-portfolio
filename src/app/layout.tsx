import type { Metadata } from "next";
import "./globals.css";
import { Yomogi } from "next/font/google";
import Header from "./features/components/Header";

const geistYomogi = Yomogi({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja-JP">
      <body
        className={`${geistYomogi.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
