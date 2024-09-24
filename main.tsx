import { Hono } from 'hono'
import invoice from "./src/route/invoice.route.tsx";
import { serveStatic } from 'hono/deno';
import { jsxRenderer } from "hono/jsx-renderer";

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
app.route('/invoice', invoice)

Deno.serve(app.fetch)
