import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/space-grotesk/wght.css";
import "./globals.css";
import "./hero.css";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
