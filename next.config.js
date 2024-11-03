const corsHeaders = [
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,HEAD' },
  { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Match both the non-www and www versions
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(plebdevs.com|www.plebdevs.com)',
          },
        ],
        headers: corsHeaders,
      },
      {
        source: '/api/:path*',
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
        has: [
          {
            type: 'host',
            value: '(plebdevs.com|www.plebdevs.com)',
          },
        ],
      },
    ];
  }
};

module.exports = nextConfig;
