const port = Number(process.env.PORT) || 8080

Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/healthz') return Response.json({ ok: true })
    return new Response(
      `<!doctype html><title>aap-example:bun</title><h1>Bun</h1><p>Served by Bun ${Bun.version} at ${new Date().toISOString()}. Marker: <code>aap-example:bun</code></p>`,
      { headers: { 'content-type': 'text/html; charset=utf-8' } },
    )
  },
})

console.log(`listening on ${port}`)
