const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { i18n } = require('./i18n.config')

const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wpvip-presidio-gov.go-vip.net',
        // port: '',
        pathname: '/**/**',
      },
    ],
  },
  // Treat SVG file imports as React Components
  webpack(configuration) {
    configuration.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return configuration
  },
  compiler: {
    // removeConsole: true,
  },
  i18n,
  productionBrowserSourceMaps: true, // allow source maps to be downloaded in prod
  output: 'standalone', // https://nextjs.org/docs/advanced-features/output-file-tracing
  trailingSlash: false,
}

// below config to be used when analysing bundle. Command: npm run analyze
// const nextConfig = withPlugins([[withBundleAnalyzer]], config)

const nextConfig = config

module.exports = nextConfig

// Notes
/*
Trailing slash - 
https://nextjs.org/docs/api-reference/next.config.js/trailing-slash

Setting this value to `true` is not recommended at this time.

Next.js has support for trailing slashes, but its implementation is buggy
and makes it difficult to satisfy VIP's required health check endpoint --
which cannot support a trailing slash. Simply changing this value to `true`
will result in failed health checks and deploys on VIP.
*/
