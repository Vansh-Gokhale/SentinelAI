import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Turbopack config for Solana/Anchor compatibility (Next.js 16+) */
  turbopack: {},

  /* Output standalone for optimized Docker/Vercel deployments */
  output: "standalone",

  /* Allow all image sources */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
