import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better debugging
  reactStrictMode: true,
  // Optimize for production
  poweredByHeader: false,
};

export default nextConfig;
