import { FC } from "hono/jsx";

export const Layout: FC<{ title?: string, children?: any }> = (props: {
  title?: string
  children?: any
}) => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title ?? 'Document'}</title>
        <link rel="stylesheet" href="public/style.css" />
        <script src="public/htmx.min.js"></script>
      </head>
      <body>
        <script src="https://cdn.tiny.cloud/1/d7azxkvknquchxctaa2irhkdxt6zqco7bxdq7soa1gowdbxm/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
        {props.children}  

        <script src="public/script.js"></script>
      </body>
    </>
  )
}
