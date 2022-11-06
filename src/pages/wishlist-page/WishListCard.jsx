import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeFromWishList,
  wishListUpdate,
} from "../../features/productSlice";

export default function WishListCard({ item }) {
  const { cartList } = useSelector((state) => state.products);
  const dispatchRedux = useDispatch();

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
          dispatchRedux(wishListUpdate(response.data.wishlist));
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
        dispatchRedux(addToCart(item));
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
        dispatchRedux(removeFromCart(item));
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
        dispatchRedux(removeFromWishList(item));
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
          onClick={() => removeWishListHandler(item)}
        ></i>
      </div>

      <div className="h-product-bottom">
        <p className="product-name">{item.companyName}</p>
        <p className="product-desc">{item.design}</p>
        <p className="product-desc">
          Offer Price: <small>₹ {item.price}</small>
        </p>
        {cartList.some((p) => p._id === item._id) ? (
          <button
            className="h-product-button"
            onClick={() => removeCartHandler(item)}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="h-product-button"
            onClick={() => addToCartHandler(item)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
