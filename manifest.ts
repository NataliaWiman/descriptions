import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FableTarot",
    short_name: "FableTarot",
    description: "Tarot cards descriptions and spreads",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfbf7",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
