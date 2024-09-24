import { FC } from "hono/jsx";

export const AddItem: FC = () => {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Name" name="item-name" className="w-full p-1 border border-gray-700 rounded" />
      </td>
      <td>
        <input type="text" placeholder="Description" name="item-description" className="w-full p-1 border border-gray-800 rounded" />
      </td>
      <td>
        <input type="text" placeholder="Quantity" name="item-quantity" className="w-full p-1 border border-gray-700 rounded" />
      </td>
      <td>
        <input type="text" placeholder="Price" name="item-price" className="w-full p-1 border border-gray-700 rounded" />
      </td>
      <td className="flex flex-row justify-center">
        <button className="button border border-black p-1 rounded m-1">Add</button>
      </td>
    </tr>
  )
}