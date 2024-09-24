import { Hono } from 'hono'
import invoice from "./src/route/invoice.route.tsx";
import { serveStatic } from 'hono/deno';
import { jsxRenderer } from "hono/jsx-renderer";
import { logger } from 'hono/logger';

const app = new Hono()

app.use('/public/*', serveStatic({ 
  root: './',
}))
app.use(
  '*',
  jsxRenderer(({ children }) => {
    return (
      <html>
        {children}
      </html>
    )
  })
)
app.use(logger())
app.route('/invoice', invoice)

const port = Number(Deno.env.get('APP_PORT')) || 3000
Deno.serve({ port }, app.fetch)
