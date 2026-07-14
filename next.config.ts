import type { NextConfig } from "next";

const isVinextBuild = process.env.npm_lifecycle_event === "build";

const nextConfig: NextConfig = isVinextBuild
  ? {}
  : {
      output: "export",
    };

export default nextConfig;
