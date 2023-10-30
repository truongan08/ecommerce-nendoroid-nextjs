import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";

import "./globals.css";
const myFont = localFont({ src: "../assets/fonts/fontawesome-webfont.woff2" });

import { Providers } from "@/lib/provider";
import { SessionProvider } from "@/provider/session-provider";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wigure",
  description: "Nendoroid for you",
  creator: "truongan",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          <SessionProvider>
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
            >
              {children}
            </main>
            <Footer />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
