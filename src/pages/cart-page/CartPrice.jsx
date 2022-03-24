import { useProduct } from "../../product-context";

export default function CartPrice({ item }) {
  const { state, dispatch } = useProduct();

  return (
    <div className="item-pricee">
      <p>Price ({item.qty} items)</p>
      <p>Rs {Number(item.price) * Number(item.qty)}</p>
    </div>
  );
}
