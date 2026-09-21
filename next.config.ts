import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import { execSync } from 'node:child_process';

// Falls back to build time when git history isn't available (e.g. shallow CI checkouts).
function resolveLastUpdated(): string {
  try {
    return execSync('git log -1 --format=%cI', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return new Date().toISOString();
  }
}

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  env: {
    LAST_UPDATED: resolveLastUpdated(),
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
