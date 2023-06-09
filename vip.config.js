// This file is not parsed by Webpack, Babel, or Typescript. Avoid language features that are not available in your target Node.js version.

// Extract the hostname from NEXT_PUBLIC_SERVER_URL for use in `isInternalLink`.
const { hostname: prodHostname } = new URL(process.env.NEXT_PUBLIC_SERVER_URL)

module.exports = {
  images: {
    /*
    By default, WordPress returns a `srcset` attribute for image blocks. The 'next/image' component, however, ignores this attribute in favor of its own image loading strategy:
    
    https://developer.wordpress.org/apis/handbook/responsive-images/
    https://nextjs.org/docs/api-reference/next/image
	
    If you want to use the native <img /> tag and the `srcset` attribute
    created by WordPress, then set `useHtmlTag` to true.
	*/
    useHtmlTag: false,
  },
  links: {
    /*
    In order to correctly route links that may be hardcoded in content or otherwise use plain <a> tags, we intercept link clicks and inspect them to determine if they are "internal" -- that is, that they belong to this site. This especially helps in local development or staging sites, where you may be loading content from your production CMS but want to route your links locally.

    Add additional hostnames to the `internalLinkHosts` array as needed.
    Extend or rewrite this function if you have more custom needs.
	*/
    isInternalLink: (hostname, _pathname) => {
      const internalLinkHosts = [prodHostname, 'localhost', '127.0.0.1']

      return internalLinkHosts.includes(hostname)
    },
  },
  wordPressEndpoint: process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT,
}
