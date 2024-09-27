import { Context, Hono } from 'hono'
import { Invoice } from "../view/invoice/create.tsx";
import { InvoiceProps } from "../view/invoice/create.tsx";
import qs from "qs";
import { Item } from "../view/invoice/item.tsx";
import { AddItem } from "../view/invoice/add-item.tsx";

const invoice = new Hono()

invoice.get('/', (c: Context) => {
  const props: InvoiceProps = {
    todayDate: new Date().toISOString().split('T')[0],
    tomorrowDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }

  return c.render(<Invoice {...props}/>)
})

invoice.post('/', async (c: Context) => {
  const body = await c.req.parseBody()
  console.log('body', body)
  const { items } = qs.parse(body)
  console.log('items', items)
  return c.json({
    message: 'Oke'
  })
})

invoice.post('/delete-item/:index', async (c: Context) => {
  const body = await c.req.parseBody()
  const parsed: { items: any[] } = qs.parse(body)
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