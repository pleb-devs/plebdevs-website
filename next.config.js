const corsHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, HEAD, OPTIONS",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "Content-Type, Authorization",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
  },
  async headers() {
    return [
      {
        source: "/.well-known/:slug*",
        headers: corsHeaders,
      },
      {
        source: "/api/nostr/:slug*",
        headers: corsHeaders,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/nostr.json",
        destination: "/api/nostr/nip05"
      },
    ];
  }
}

module.exports = nextConfig;
