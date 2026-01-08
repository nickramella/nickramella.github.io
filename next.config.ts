import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  // basePath: '/nickramella.github.io',
  // assetPrefix: '/nickramella.github.io/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
