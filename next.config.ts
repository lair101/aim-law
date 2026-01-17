import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

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

export default withNextIntl(nextConfig);
