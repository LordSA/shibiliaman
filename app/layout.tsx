import type { Metadata } from "next";
import ClientLayout from "../components/ClientLayout";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shibili Aman TK",
  description: "blah blah blah",
  generator: "shibili.tech",
  metadataBase : new URL('https://www.shibili.tech'),
  icons: {
    icon : [
      {
        url:"/logo.png",
        media: "prefers-color-schema:lignt)",
      },
      {
        url: "/logo.png",
        media: "(prefers-coloc-schema: dark)",
      },
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientLayout 
        geistSans={geistSans.variable} 
        geistMono={geistMono.variable}
      >
        {children}
      </ClientLayout>
    </html>
  );
}
