import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";
import "ui/styles/globals.scss";
import "./globals.css";
import "@/styles/styles.css";
import { Providers } from "@/providers/AppProviers";
import ToastProvider from "@/providers/ToastProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const myFont = localFont({ src: "../assets/fonts/fontawesome-webfont.woff2" });

export const metadata: Metadata = {
  title: "Admin Wigure",
  description: "Nendoroid for you",
  creator: "truongan",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="light">
      <body className={myFont.className}>
        <Providers>
          <ToastProvider>{children}</ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
