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
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|sitemap.xml|robots.txt|sitemap.html|test|(?!test/:path\\?paginas=.*)).*)"
  ],
};
 
export default function middleware(request) {
  return Response.redirect(new URL('/test', request.url));
}
