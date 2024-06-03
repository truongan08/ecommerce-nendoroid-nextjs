import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";

import "./globals.css";
const myFont = localFont({ src: "../assets/fonts/fontawesome-webfont.woff2" });

import { Providers } from "@/lib/provider";
import ToastProvider from "@/provider/ToastProvider";

export const metadata: Metadata = {
  title: "Wigure",
  description: "Nendoroid for you",
  creator: "truongan",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="light">
      <body className={myFont.className}>
        <div className="flex flex-col min-h-screen">
          <Providers>
            <ToastProvider>{children}</ToastProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
