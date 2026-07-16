import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const isBuild = typeof process !== 'undefined' && process.argv && process.argv.some(arg => arg.includes('build'));
  const acceptHeader = isBuild ? null : context.request.headers.get('accept');
  
  if (acceptHeader?.includes('text/markdown') && context.url.pathname === '/') {
    try {
      const llmsResponse = await fetch(new URL('/llms.txt', context.url));
      if (llmsResponse.ok) {
        const markdown = await llmsResponse.text();
        return new Response(markdown, {
          headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
        });
      }
    } catch (e) { }
  }

  const response = await next();

  if (response.headers.get('content-type')?.includes('text/html')) {
    response.headers.set('Link', '</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="service-doc", </.well-known/security.txt>; rel="help"');
  }

  return response;
});