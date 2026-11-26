/**
 * open-next.config.ts — OpenNext adapter settings for Cloudflare Workers.
 * The site is fully prerendered with no revalidation, so the read-only
 * static-assets incremental cache is enough.
 */
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
