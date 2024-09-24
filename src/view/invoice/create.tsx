import { FC } from "hono/jsx";
import { Layout } from "../index.tsx";
import { Item } from "./item.tsx";
import { AddItem } from "./add-item.tsx";

export type InvoiceProps = {
  todayDate: string
  tomorrowDate: string
}

export const Invoice: FC<InvoiceProps> = (props: InvoiceProps) => {
  return (
    <Layout title="Invoice">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-full max-w-screen-md h-dvh">
          <div className="container">
            <h1 className="fond-bold text-2xl my-2">Create Invoice</h1>

            <form action="/invoice" method="post" className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex flex-col flex-1">
                  <label htmlFor="invoice-number" className="font-bold">Invoice Number</label>
                  <input
                    type="text"
                    className="border border-black mb-2 p-1 rounded mr-1"
                    name="invoice-number"
                    id="invoice-number"
                    value="INV/2024/0001"
                  />
                </div>
                <div className="flex flex-col flex-1 ml-1">
                  <label htmlFor="invoice-date" className="font-bold">Invoice Date</label>
                  <input
                    type="date"
                    className="border border-black mb-2 p-1 rounded"
                    name="invoice-date"
                    id="invoice-date"
                    value={props.todayDate}
                  />

                  <label htmlFor="invoice-deadline" className="font-bold">Invoice Deadline</label>
                  <input
                    type="date"
                    className="border border-black mb-2 p-1 rounded"
                    name="invoice-deadline"
                    id="invoice-deadline"
                    value={props.tomorrowDate}
                  />
                </div>
              </div> 

              <div className="flex flex-row my-2">
                <div className="flex-1 m-1">
                  <label htmlFor="company-info" className="font-bold mb-2">Company Info</label>
                  <textarea name="company-info" id="company-info" className="mb-2">
                    <p>Company Name</p>
                    <p>Jl. Boulevard Diponegoro No.105, Bencongan, Kec. Klp. Dua</p>
                    <p>Kabupaten Tangerang, Banten 15810</p>
                    <p>NPWP: -</p>
                  </textarea>
                </div>

                <div className="flex-1 m-1">
                  <label htmlFor="customer-info" className="font-bold mb-2">Customer Info</label>
                  <textarea name="customer-info" id="customer-info" className="mb-2">
                    <p>Customer Name</p>
                    <p>Alam Sutera, Jl. Jalur Sutera Boulevard No.45, Kunciran, Kec. Pinang</p>
                    <p>Kota Tangerang, Banten 15320</p>
                  </textarea>
                </div>
              </div>

              <div className="container my-2">
                <label htmlFor="product" className="font-bold mb-2">Product</label>
                <div className="flex flex-row mb-2">
                  <table className="border border-collapse table-auto flex-grow">
                    <thead className="border">
                      <tr>
                        <th className="border border-black p-1">Name</th>
                        <th className="border border-black p-1">Description</th>
                        <th className="border border-black p-1">Quantity</th>
                        <th className="border border-black p-1">Price</th>
                        <th className="border border-black p-1">Action</th>
                      </tr>
                    </thead>
                    <tbody className="border border-black">
                      <Item index={0} name="Product 1" description="Description 1" quantity={1} price={1000} />
                      <Item index={1} name="Product 2" description="Description 2" quantity={2} price={500} />
                      <AddItem />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container my-2">
                <label htmlFor="note" className="font-bold mb-2">Note</label>
                <textarea name="note" id="note">
                  Payment to:
                </textarea>
              </div>

              <button type="submit" className="bg-black text-white rounded px-2 py-4 my-2">Create Invoice</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}