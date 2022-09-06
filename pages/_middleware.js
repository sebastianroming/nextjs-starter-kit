import { NextResponse } from 'next/server'

// Block Austria, prefer Germany
const BLOCKED_COUNTRY = 'DE'

// Limit middleware pathname config
export const config = {
  matcher: '/',
}

export function middleware(req) {
  // Extract country
  const country = req.geo.country || 'US'

  // Specify the correct pathname
  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = '/blocked'
  } else {
    req.nextUrl.pathname = `/${country}`
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl)
}
