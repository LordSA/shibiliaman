"use client";
import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
  geistSans,
  geistMono,
}: {
  children: React.ReactNode;
  geistSans: string;
  geistMono: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <body
      className={`${geistSans} ${geistMono} antialiased selection:bg-[#33ff33] selection:text-[#0a0a0a]`}
    >
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <SmoothScroll>
        {!loading && children}
      </SmoothScroll>
    </body>
  );
}
