/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/nostr.json",
        destination: "/api/nostr/nip05",
      },
    ];
  }
}

module.exports = nextConfig;
