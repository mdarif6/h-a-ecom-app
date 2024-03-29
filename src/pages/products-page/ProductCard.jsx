import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToWishList,
  removeFromWishList,
} from "../../features/productSlice";
import { settingAuthentication } from "../../features/authSlice";

export default function ProductCard({ item }) {
  const { cartList, wishList } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const dispatchRedux = useDispatch();

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
        dispatchRedux(addToWishList(item));
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
  function logoutHandler() {
    localStorage.removeItem("authToken");
    dispatchRedux(settingAuthentication(false));
  }
  return (
    <div className="h-grid-product" key={item._id}>
      <img src={item.image} />

      {isAuthenticated ? (
        <>
          {wishList.some((p) => p._id === item._id) ? (
            <div className="h-product-icon h-product-icon-red">
              <i
                className="fas fa-heart"
                onClick={() => removeWishListHandler(item)}
              ></i>
            </div>
          ) : (
            <div className="h-product-icon">
              <i
                className="fas fa-heart"
                onClick={() => addToWishListHandler(item)}
              ></i>
            </div>
          )}
        </>
      ) : (
        <Link to="/login">
          <div className="h-product-icon">
            <i className="fas fa-heart"></i>
          </div>
        </Link>
      )}

      <div className="h-product-bottom">
        <p className="product-name">{item.companyName}</p>
        <p className="product-desc">{item.design}</p>
        <p className="product-desc">
          Offer Price: <small>₹ {item.price}</small>
        </p>

        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <Link to="/login">
            <button className=" h-product-button">Add to Cart </button>
          </Link>
        )}
      </div>
    </div>
  );
}
