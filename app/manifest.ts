import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Danial's PWA",
    short_name: "DanialPWA",
    description:
      "A Progressive Web App built with Next.js by the one and only Danial Khakbaz",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/Danial-Khakbaz-logo.ico",
        sizes: "192x192",
        type: "icon",
      },
      {
        src: "/Danial-Khakbaz-logo.ico",
        sizes: "512x512",
        type: "icon",
      },
    ],
  };
}
