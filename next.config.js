/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },

    // compiler: {
    //   removeConsole: true,
    // },
    reactStrictMode: false,
    images: {
        // domains: ['gamplove.joytech.store'],
        domains: ['server.js'],
        remotePatterns: [
            {
                // The `src` property hostname must end with `.example.com`,
                // otherwise the API will respond with 400 Bad Request.
                protocol: 'https',
                hostname: '**.example.com',
            },
    ],
  },
}

module.exports = nextConfig
