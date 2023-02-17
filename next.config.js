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
        hostname: '<ex:i.ibb.co>',
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
}

// below config to be used when analysing bundle. Command: npm run analyze
// const nextConfig = withPlugins([[withBundleAnalyzer]], config)

const nextConfig = config

module.exports = nextConfig
