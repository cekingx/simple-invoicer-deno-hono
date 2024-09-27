export type InvoiceItem = {
  index: number
  name: string
  description: string
  quantity: number
  price: number
}

export type Invoice = {
  number: string
  date: Date
  deadline: Date
  items: InvoiceItem[]
  client: string
  company: string
  note: string
  total: string
}