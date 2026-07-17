import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack/output tracing doesn't pick up a
  // stray lockfile in a parent directory.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
