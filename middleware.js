import { NextResponse } from 'next/server'

export const middleware = (req) => {
  console.log('health check middleware')

  // Required health check endpoint on VIP. Do not remove.
  if (req.nextUrl.pathname === '/cache-healthcheck') {
    // @TODO - remove logs post testing middleware
    console.log('health check route matched')

    return NextResponse.rewrite(new URL('/api/healthcheck', req.url))
  }

  // Continue as normal through the Next.js lifecycle.
  return NextResponse.next()
}
