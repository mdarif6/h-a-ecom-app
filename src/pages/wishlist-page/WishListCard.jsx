import { useProduct } from "../../product-context";

export default function WishListCard({ item }) {
  const { state, dispatch } = useProduct();
  return (
    <div className="h-grid-product">
      <img src={item.image} alt="" />
      <div className="h-product-icon wish-listed">
        <i
          className="fas fa-heart"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
          }
        ></i>
      </div>

      <div className="h-product-bottom">
        <p class="product-name">{item.companyName}</p>
        <p class="product-desc">{item.design}</p>
        <p class="product-desc">
          Offer Price: <small>₹ {item.price}</small>
        </p>
        {state.cartList.some((p) => p._id === item._id) ? (
          <button
            class="h-product-button"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove From Cart
          </button>
        ) : (
          <button
            class="h-product-button"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
