"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

type ProvidersProps = {
  children: React.ReactNode;
};

type NextThemeProviderProps = ProvidersProps & {
  themeProps?: ThemeProviderProps;
};

export const NextThemeProvider = ({
  children,
  themeProps,
}: NextThemeProviderProps) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      themes={["light", "dark", "system"]}
      forcedTheme={"light"}
      {...themeProps}
    >
      {children}
    </ThemeProvider>
  );
};
