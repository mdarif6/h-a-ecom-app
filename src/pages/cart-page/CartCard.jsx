import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  cartUpdate,
  addToWishList,
  incrementQuantity,
  decrementQuantity,
} from "../../features/productSlice";

export default function CartCard({ item }) {
  const { wishList } = useSelector((state) => state.products);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    async function getCartProduct() {
      let token = localStorage.getItem("authToken");

      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatchRedux(cartUpdate(response.data.cart));
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
                  removeCartHandler(item);
                } else {
                  dispatchRedux(decrementQuantity(item._id));
                }
              }}
            ></i>
          </p>
          <p className="h-cart-quantity-number">{item.qty}</p>
          <p>
            <i
              className="fas fa-plus-circle"
              onClick={() => dispatchRedux(incrementQuantity(item._id))}
            ></i>
          </p>
        </div>

        <div className="image-cart-btn">
          <button
            className="remove-btn"
            onClick={() => removeCartHandler(item)}
          >
            Remove From Cart
          </button>

          {wishList.some((p) => p._id === item._id) ? (
            <button
              className="move-btn"
              onClick={() => removeCartHandler(item)}
            >
              Move to Wishlist
            </button>
          ) : (
            <button
              className="move-btn"
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
