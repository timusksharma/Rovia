import type { NextConfig } from "next";

const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? "/Rovia" : "",
  assetPrefix: isPages ? "/Rovia/" : undefined,
};

export default nextConfig;
