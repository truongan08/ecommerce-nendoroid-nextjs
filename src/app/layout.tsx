import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import "./globals.css";

import { Providers } from "@/lib/provider";
import { SessionProvider } from "@/provider/session-provider";

import Footer from "@/components/Footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wigure",
  description: "Nendoroid for you",
  creator: "truongan",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className + " relative"}>
        <Providers>
          <SessionProvider>
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
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
