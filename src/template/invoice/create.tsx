import { FC } from "hono/jsx";
import { Layout } from "../index.template.tsx";

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

            <form action="/" method="post" className="flex flex-col">
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
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}