import { Context, Hono } from 'hono'
import { Invoice as Create } from "../view/invoice/create.tsx";
import { InvoiceProps } from "../view/invoice/create.tsx";
import qs from "qs";
import { Item } from "../view/invoice/item.tsx";
import { AddItem } from "../view/invoice/add-item.tsx";
import { Invoice, InvoiceItem } from "../class/Invoice.ts";
import { Show } from "../view/invoice/show.tsx";

const invoice = new Hono()

invoice.get('/', (c: Context) => {
  const props: InvoiceProps = {
    todayDate: new Date().toISOString().split('T')[0],
    tomorrowDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }

  return c.render(<Create {...props}/>)
})

invoice.post('/', async (c: Context) => {
  const body = await c.req.parseBody()
  const parsed: { items: InvoiceItem[] } = qs.parse(body)
  const { items } = parsed
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const invoice: Invoice = {
    number: body['invoice-number'] as string,
    date: new Date(body['invoice-date'] as string),
    deadline: new Date(body['invoice-deadline'] as string),
    items,
    client: body['customer-info'] as string,
    company: body['company-info'] as string,
    note: body['note'] as string,
    total: total.toString()
  }

  return c.render(<Show {...invoice} />)
})

invoice.post('/add-item', async (c: Context) => {
  const body = await c.req.parseBody()
  const parsed: { items: InvoiceItem[] } = qs.parse(body)
  const { items } = parsed
  items.push({
    index: items.length,
    name: body['item-name'] as string,
    description: body['item-description'] as string,
    quantity: Number(body['item-quantity']),
    price: Number(body['item-price'])
  })

  const Items =
  <>
    {items.map((item, index) => (
      <Item
        index={index}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        price={item.price} />
    ))}
    <AddItem />
  </>

  return c.html(Items)
})

invoice.post('/delete-item/:index', async (c: Context) => {
  const body = await c.req.parseBody()
  const parsed: { items: InvoiceItem[] } = qs.parse(body)
  const { items } = parsed
  const index = Number(c.req.param('index'))
  const result = items.toSpliced(index, 1)

  const Items =
  <>
    {result.map((item, index) => (
      <Item
        index={index}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        price={item.price} />
    ))}
    <AddItem />
  </>

  return c.html(Items)
})

export default invoice