import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
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
    </html>
  );
}
