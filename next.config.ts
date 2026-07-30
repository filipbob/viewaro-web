import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (custom domain: viewaro.itquotes.hr).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
