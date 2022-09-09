import { NextResponse } from "next/server";

export function middleware(req) {

  //console.log("request", req);

  const nextUrl = req.nextUrl;
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
  //NextResponse.rewrite(nextUrl);
  return NextResponse.rewrite(nextUrl);
}
