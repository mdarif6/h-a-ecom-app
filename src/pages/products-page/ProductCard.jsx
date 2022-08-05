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
    <div class="h-grid-product" key={item._id}>
      <img src={item.image} />

      {false ? (
        <>
          {state.wishList.some((p) => p._id === item._id) ? (
            <div class="h-product-icon h-product-icon-red">
              <i
                class="fas fa-heart"
                // onClick={() =>
                //   dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
                // }
                onClick={() => removeWishListHandler(item)}
              ></i>
            </div>
          ) : (
            <div className="h-product-icon">
              <i
                class="fas fa-heart"
                // onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })}
                onClick={() => addToWishListHandler(item)}
              ></i>
            </div>
          )}
        </>
      ) : (
        <Link to="/login">
          <div className="h-product-icon">
            <i class="fas fa-heart"></i>
          </div>
        </Link>
      )}

      {/* {state.wishList.some((p) => p._id === item._id) ? (
        <div class="h-product-icon h-product-icon-red">
          <i
            class="fas fa-heart"
            // onClick={() =>
            //   dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
            // }
            onClick={() => removeWishListHandler(item)}
          ></i>
        </div>
      ) : (
        <div className="h-product-icon">
          <i
            class="fas fa-heart"
            // onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })}
            onClick={() => addToWishListHandler(item)}
          ></i>
        </div>
      )} */}

      <div class="h-product-bottom">
        <p class="product-name">{item.companyName}</p>
        <p class="product-desc">{item.design}</p>
        <p class="product-desc">
          Offer Price: <small>₹ {item.price}</small>
        </p>

        {state.cartList.some((p) => p._id === item._id) ? (
          <button
            class="h-product-button"
            // onClick={() =>
            //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
            // }
            onClick={() => removeCartHandler(item)}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            class="h-product-button"
            onClick={() => addToCartHandler(item)}
            // onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
