const corsHeaders = [
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
  { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/nostr.json',
        has: [
          {
            type: 'host',
            value: 'plebdevs.com',
          },
        ],
        destination: 'https://www.plebdevs.com/.well-known/nostr.json',
        permanent: true,
        headers: corsHeaders,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/nostr/:path*',
        headers: corsHeaders,
      },
      {
        source: '/.well-known/nostr.json',
        headers: corsHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/nostr.json',
        destination: '/api/nostr/nip05',
      },
    ];
  }
};

module.exports = nextConfig;
