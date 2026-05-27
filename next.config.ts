import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Next.js Image Optimization requires a server. This disables it so standard <img> tags work.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
