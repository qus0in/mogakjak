# Next.js & Cloudflare Integration Patterns

## next.config.ts setup
Cloudflare Pages bindings setup (`setupDevPlatform`) can cause `ReferenceError: await is not defined` if used at the top level of `next.config.ts`. 

**Best Practice**: 
Export an `async` function from `next.config.ts` and call `setupDevPlatform` inside it.

```typescript
import type { NextConfig } from "next";

const nextConfig = async (): Promise<NextConfig> => {
  if (process.env.NODE_ENV === "development") {
    const { setupDevPlatform } = await import("@cloudflare/next-on-pages/next-dev");
    await setupDevPlatform();
  }

  return {
    /* config */
  };
};

export default nextConfig;
```
