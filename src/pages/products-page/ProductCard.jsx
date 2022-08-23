import axios from "axios";
import { Link } from "react-router-dom";
import { useProduct } from "../../product-context";
import { useAuth } from "../../auth-context";

export default function ProductCard({ item }) {
  const { state, dispatch } = useProduct();
  const { state: authState, dispatch: authDispatch } = useAuth();

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
  function logoutHandler() {
    localStorage.removeItem("authToken");
    authDispatch({ type: "SET_AUTH", payload: false });
  }
  return (
    <div className="h-grid-product" key={item._id}>
      <img src={item.image} />

      {authState.isAuthenticated ? (
        <>
          {state.wishList.some((p) => p._id === item._id) ? (
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

        {authState.isAuthenticated ? (
          <>
            {state.cartList.some((p) => p._id === item._id) ? (
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
