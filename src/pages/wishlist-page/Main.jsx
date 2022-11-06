import WishListCard from "./WishListCard";
import { useSelector } from "react-redux";
export default function () {
  const { wishList } = useSelector((state) => state.products);

  return (
    <main className="ha-wish-gtr">
      <div className="wishlist-heading">
        <h2>My Wishlist ( {wishList.length} item)</h2>
      </div>
      <div className="ha-main-wishlist-product">
        {wishList.map((item) => (
          <WishListCard key={item._id} item={item} />
        ))}
      </div>
    </main>
  );
}
