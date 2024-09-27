import { FC } from "hono/jsx";
import { InvoiceItem } from "../../class/InvoiceItem.ts";

export const Item: FC<InvoiceItem> = (props: InvoiceItem) => {
  return (
    <tr>
      <td className="border border-black">
        <input type="text" className="w-full p-1" value={props.name} name={`items[${props.index}][name]`} readonly/>
      </td>
      <td className="border border-black">
        <input type="text" className="w-full p-1" value={props.description} name={`items[${props.index}][description]`} readonly/>
      </td>
      <td className="border border-black">
        <input type="text" className="w-full p-1" value={props.quantity} name={`items[${props.index}][quantity]`} readonly/>
      </td>
      <td className="border border-black">
        <input type="text" className="w-full p-1" value={props.price} name={`items[${props.index}][price]`} readonly/>
      </td>
      <td className="border border-black">
        <div className="container flex flex-row justify-center">
          <button
            hx-post={`/invoice/delete-item/${props.index}`}
            hx-target="closest tbody"
            className="border border-black p-1 rounded m-1"
          >Delete</button>
        </div>
      </td>
    </tr>
  )
}