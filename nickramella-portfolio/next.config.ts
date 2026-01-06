import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  // Optionally, set the basePath if deploying to a project page (e.g., username.github.io/repo-name)
  basePath: '/nickramella-portfolio',
  // assetPrefix: '/nickramella.github.io/',
};

export default nextConfig;
