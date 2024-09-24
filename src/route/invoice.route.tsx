import { Context, Hono } from 'hono'
import { Invoice } from "../view/invoice/create.tsx";
import { InvoiceProps } from "../view/invoice/create.tsx";

const invoice = new Hono()

invoice.get('/', (c: Context) => {
  const props: InvoiceProps = {
    todayDate: new Date().toISOString().split('T')[0],
    tomorrowDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }

  return c.render(<Invoice {...props}/>)
})

export default invoice