import type { NextConfig } from "next";

const nextConfig = async (): Promise<NextConfig> => {
  if (process.env.NODE_ENV === "development") {
    const { setupDevPlatform } = await import("@cloudflare/next-on-pages/next-dev");
    await setupDevPlatform();
  }

  return {
    /* config options here */
  };
};

export default nextConfig;
