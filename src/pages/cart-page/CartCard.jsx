import axios from "axios";
import { useEffect } from "react";
import { useProduct } from "../../product-context";

export default function CartCard({ item }) {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    async function getCartProduct() {
      let token = localStorage.getItem("authToken");

      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "CART_UPDATE", payload: response.data.cart });
      }
    }
    getCartProduct();
  }, []);

  async function removeCartHandler(item) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addToWishListHandler() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: item,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: item });
      }
    } catch (error) {
      console.log(error);
    }
  }

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
              onClick={() => {
                if (item.qty === 1) {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item });
                } else {
                  dispatch({ type: "DECREMENT", payload: item._id });
                }
              }}
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
            // onClick={() =>
            //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
            // }
            onClick={() => removeCartHandler(item)}
          >
            Remove From Cart
          </button>

          {state.wishList.some((p) => p._id === item._id) ? (
            <button
              className="move-btn"
              // onClick={() => {
              //   dispatch({ type: "REMOVE_FROM_CART", payload: item });
              // }}
              onClick={() => removeCartHandler(item)}
            >
              Move to Wishlist
            </button>
          ) : (
            <button
              className="move-btn"
              // onClick={() => {
              //   dispatch({ type: "REMOVE_FROM_CART", payload: item });
              //   dispatch({ type: "ADD_TO_WISHLIST", payload: item });
              // }}
              onClick={() => {
                addToWishListHandler(item);
                removeCartHandler(item);
              }}
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
