import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";

import "./globals.css";
const myFont = localFont({ src: "../assets/fonts/fontawesome-webfont.woff2" });

import { Providers } from "@/lib/provider";

export const metadata: Metadata = {
  title: "Wigure",
  description: "Nendoroid for you",
  creator: "truongan",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="light">
      <body className={myFont.className}>
        <Providers>
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
