import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt die lokalen SVG-Platzhalterfotos in public/photos/.
    // Sobald echte Fotos (jpg/png) eingesetzt werden, kann dies
    // entfernt werden.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
