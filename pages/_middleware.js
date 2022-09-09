import { NextResponse } from 'next/server'

// Block Austria, prefer Germany
const BLOCKED_COUNTRY = 'AT'

// Limit middleware pathname config
export const config = {
  matcher: '/',
}

export function middleware(req) {

  console.log("request", req);
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
