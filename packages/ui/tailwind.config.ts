// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";
import { nextui } from "@nextui-org/react";

const config: Pick<Config, "darkMode" | "plugins" | "prefix" | "presets"> = {
  darkMode: "class",
  plugins: [nextui({})],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
