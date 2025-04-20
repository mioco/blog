import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Osyo's Blog",
  description: "A personal blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
      <GoogleTagManager gtmId="G-7Q3TCZRD8L" />
    </html>
  );
}
