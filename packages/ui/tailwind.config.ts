// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";
import { nextui } from "@nextui-org/theme";

const config: Pick<Config, "darkMode" | "plugins" | "presets"> = {
  darkMode: "class",
  presets: [sharedConfig],
  plugins: [nextui()],
};

export default config;
