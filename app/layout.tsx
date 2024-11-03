import { ReactNode } from "react";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { LatoFont } from "@/styles/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:url": "",
    "twitter:domain": "",
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:title": "",
    "og:description": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={LatoFont.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
