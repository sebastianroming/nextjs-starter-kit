
import { NextResponse } from 'next/server';
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml (sitemap file)
     * - robots.txt (robots file)
     * - sitemap.html (sitemap file for humans)
     * - /br (Brazilian version of the site)
     */
    //"/((?!api|_next/static|_next/image|_next/data|favicon.ico|sitemap.xml|robots.txt|sitemap.html|br|(?!br/:path\\?paginas=.*)).*)"
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
 
export default function middleware(request) {

  console.log(request);

  const referrer = request.referrer || 'not specified';

  const _redirect = new Response();
  _redirect.headers.set('X-Custom-Referrer-Header', referrer);

  return _redirect.redirect(new URL('/api/referer', request.url));;

}
