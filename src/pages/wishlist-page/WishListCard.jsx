import axios from "axios";
import { useEffect } from "react";
import { useProduct } from "../../product-context";

export default function WishListCard({ item }) {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    async function getWishListProduct() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({
            action: "WISHLIST_UPDATE",
            payload: response.data.wishlist,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    getWishListProduct();
  }, []);

  async function addToCartHandler(item) {
    let token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "/api/user/cart",
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
        dispatch({ type: "ADD_TO_CART", payload: item });
      }
    } catch (error) {
      console.log(error);
    }
  }

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

  async function removeWishListHandler() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-grid-product">
      <img src={item.image} alt="" />
      <div className="h-product-icon wish-listed">
        <i
          className="fas fa-heart"
          // onClick={() =>
          //   dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
          // }
          onClick={() => removeWishListHandler(item)}
        ></i>
      </div>

      <div className="h-product-bottom">
        <p className="product-name">{item.companyName}</p>
        <p className="product-desc">{item.design}</p>
        <p className="product-desc">
          Offer Price: <small>₹ {item.price}</small>
        </p>
        {state.cartList.some((p) => p._id === item._id) ? (
          <button
            className="h-product-button"
            // onClick={() =>
            //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
            // }
            onClick={() => removeCartHandler(item)}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="h-product-button"
            // onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            onClick={() => addToCartHandler(item)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
