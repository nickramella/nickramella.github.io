import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  basePath: '/nickramella-portfolio',
  reactStrictMode: true,
  assetPrefix: '/nickramella.github.io/',
};

export default nextConfig;
