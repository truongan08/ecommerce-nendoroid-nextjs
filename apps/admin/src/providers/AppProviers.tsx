"use client";

import { NextUIProvider } from "@nextui-org/react";
import { NextThemeProvider } from "ui/providers";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <>
        <NextThemeProvider>
          <>{children}</>
        </NextThemeProvider>
      </>
    </NextUIProvider>
  );
}
