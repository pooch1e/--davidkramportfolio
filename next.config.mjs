/**
 * next.config.mjs — Next.js configuration. Also wires `next dev` to the
 * Cloudflare bindings in wrangler.jsonc so local dev matches the Worker.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
