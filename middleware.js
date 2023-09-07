// This function can be marked `async` if using `await` inside
/*export function middleware(request) {
  console.log(`Middleware request.referrer: '${request.referrer}'`)
  console.log(`Middleware request.headers.get('referer'): '${request.headers.get('referer')}'`)

  console.log("nextUrl", request.nextUrl);
  const host = request.nextUrl.hostname || undefined;
  console.log("host", host);

  console.log("process.env.lowercase_UPPERCASE", process.env.lowercase_UPPERCASE);
  
}
*/

import { NextResponse } from 'next/server';
 
// config with custom matcher
//export const config = {
//  matcher: '/redirectTest',
//};

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
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|sitemap.xml|robots.txt|sitemap.html|/br/:path(?!\\?paginas=.*)).*)",
    ""
  ],
};
 
export default function middleware(request) {

  console.log(request);

  const referrer = request.referrer || 'not specified';

  //const requestHeaders = new Headers(request.headers)
 // requestHeaders.set('X-Custom-Referrer-Header', referrer)

  //request.headers.set('X-Custom-Referrer-Header', referrer)
  //request.headers.set('Referer', referrer)

  //console.log('referrer', referrer);


  //const response = NextResponse.redirect(new URL('/api/referer', request.url));
  //response.headers.set('X-Custom-Referrer-Header2', referrer);
  //response.headers.set('Referer', referrer)
  //console.log('referrer 2', referrer);



  const _redirect = new Response();
  _redirect.headers.set('X-Custom-Referrer-Header', referrer);

  return _redirect.redirect(new URL('/api/referer', request.url));;


  //return request.redirect(new URL('/api/referer', request.url));
}
