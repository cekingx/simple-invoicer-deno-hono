import { FC } from "hono/jsx";
import { Invoice } from "../../class/Invoice.ts";
import { Layout } from "../index.tsx";

export const Show: FC<Invoice> = (props: Invoice) => {
  return (
    <Layout title="Show">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col max-w-screen-sm w-full h-dvh">
          <div class="container">
            <div class="flex flex-row justify-center">
              <h1 class="font-bold text-2xl">Invoice</h1>
            </div>
            <div class="flex flex-row mb-5">
              <div class="flex flex-row flex-grow">
                <div class="flex flex-col flex-grow">
                  <h1 class="font-bold">Company</h1>
                  <div dangerouslySetInnerHTML={{ __html: props.company }}></div>
                </div>
              </div>
              <div class="flex flex-col flex-grow justify-end text-end">
                <div>
                  <p>Invoice Number</p>
                  <p class="font-bold">{ props.number }</p>
                </div>
                <div>
                  <p>Invoice Date</p>
                  <p class="font-bold">{ props.date.toISOString().split('T')[0] }</p>
                </div>
                <div>
                  <p>Invoice Deadline</p>
                  <p class="font-bold">{ props.deadline.toISOString().split('T')[0] }</p>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-end mb-5">
              <div class="flex flex-col text-end">
                <h1 class="font-bold">Customer</h1>
                <div dangerouslySetInnerHTML={{ __html: props.client }}></div>
              </div>
            </div>
            <div class="flex flex-row mb-5">
              <table class="table-fixed flex-grow border border-collapse border-black">
                <thead>
                  <tr>
                    <th class="border border-black">Product</th>
                    <th class="border border-black">Description</th>
                    <th class="border border-black">Quantity</th>
                    <th class="border border-black">Price</th>
                  </tr>
                </thead>
                <tbody>
                  { props.items.map((item) => (
                    <tr>
                      <td class="border border-black">{ item.name }</td>
                      <td class="border border-black">{ item.description }</td>
                      <td class="border border-black text-end">{ item.quantity }</td>
                      <td class="border border-black text-end">{ item.price }</td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
            <div class="flex flex-row justify-end">
              <div class="text-end">
                <p>Total</p>
                <p class="font-bold">{ props.total }</p>
              </div>
            </div>
            <div class="flex flex-row">
              <div>
                <h1 class="font-bold">Note</h1>
                <div dangerouslySetInnerHTML={{ __html: props.note }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}