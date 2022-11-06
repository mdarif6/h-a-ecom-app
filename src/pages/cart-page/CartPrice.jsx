export default function CartPrice({ item }) {
  return (
    <div className="item-pricee">
      <p>Price ({item.qty} items)</p>
      <p>Rs {Number(item.price) * Number(item.qty)}</p>
    </div>
  );
}
