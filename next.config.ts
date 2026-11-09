import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  outputFileTracingExcludes: {
    "/design-review/contact": ["./design references/**"],
  },
};

export default nextConfig;
