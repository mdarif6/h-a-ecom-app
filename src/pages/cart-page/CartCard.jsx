import { useProduct } from "../../product-context";

export default function CartCard({ item }) {
  const { state, dispatch } = useProduct();
  return (
    <div className="h-imagecart-wrapper">
      <div className="image-cart">
        <img src={item.image} alt="" />
      </div>
      <div className="image-text">
        <h3>{item.companyName}</h3>
        <p>{item.design}</p>
        <p>Price: {item.price}</p>
        <p>55%off</p>
        <div className="h-cart-quantity">
          <p>Quantity:</p>
          <p>
            <i
              className="fas fa-minus-circle"
              onClick={() => dispatch({ type: "DECREMENT", payload: item._id })}
            ></i>
          </p>
          <p className="h-cart-quantity-number">{item.qty}</p>
          <p>
            <i
              className="fas fa-plus-circle"
              onClick={() => dispatch({ type: "INCREMENT", payload: item._id })}
            ></i>
          </p>
        </div>

        <div className="image-cart-btn">
          <button
            className="remove-btn"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove From Cart
          </button>

          {state.wishList.some((p) => p._id === item._id) ? (
            <button
              className="move-btn"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
                dispatch({ type: "REMOVE_FROM_CART", payload: item });
              }}
            >
              Move to Wishlist
            </button>
          ) : (
            <button
              className="move-btn"
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: item })
              }
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
