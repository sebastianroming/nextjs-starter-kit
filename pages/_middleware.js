import { NextResponse } from "next/server";

// Limit middleware pathname config
export const config = {
  matcher: '/',
}

export function middleware(req) {

  console.log("request", req);

  /*const nextUrl = req.nextUrl;
  const { geo } = req;
  const country = geo.country || "NULL";
  const city = geo.city || "NULL";
  const region = geo.region || "NULL";
  const timezone = geo.timezone || "NULL";
  const ip = geo.ip || "NULL";
  nextUrl.searchParams.set("country", country);
  nextUrl.searchParams.set("city", city);
  nextUrl.searchParams.set("region", region);
  nextUrl.searchParams.set("timezone", timezone);
  nextUrl.searchParams.set("ip", ip);
  console.log("NextURL", nextUrl);*/
  //NextResponse.rewrite(nextUrl);
  //return NextResponse.rewrite(nextUrl);
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
