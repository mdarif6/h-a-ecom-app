import { useProduct } from "../../product-context";
import WishListCard from "./WishListCard";
export default function () {
  const { state, dispatch } = useProduct();

  return (
    <main className="ha-wish-gtr">
      <div className="wishlist-heading">
        <h2>My Wishlist ( {state.wishList.length} item)</h2>
      </div>
      <div className="ha-main-wishlist-product">
        {state.wishList.map((item) => (
          <WishListCard key={item._id} item={item} />
        ))}
      </div>
    </main>
  );
}
