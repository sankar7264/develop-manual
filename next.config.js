const { i18n } = require('./i18n.config')

const nextConfig = {
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  compiler: {
    // removeConsole: true,
  },
  i18n,
  productionBrowserSourceMaps: true, // allow source maps to be downloaded in prod
  output: 'standalone', // https://nextjs.org/docs/advanced-features/output-file-tracing
}

module.exports = nextConfig
