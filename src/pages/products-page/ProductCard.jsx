import { useProduct } from "../../product-context";

export default function ProductCard({ item }) {
  const { state, dispatch } = useProduct();

  return (
    <div class="h-grid-product" key={item._id}>
      <img src={item.image} />

      {state.wishList.some((p) => p._id === item._id) ? (
        <div class="h-product-icon h-product-icon-red">
          <i
            class="fas fa-heart"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
            }
          ></i>
        </div>
      ) : (
        <div className="h-product-icon">
          <i
            class="fas fa-heart"
            onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })}
          ></i>
        </div>
      )}

      <div class="h-product-bottom">
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
