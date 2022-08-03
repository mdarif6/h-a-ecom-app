import React, { useState } from "react";
import "./ShippingPage.css";
import { useProduct } from "../../product-context";

import CartPrice from "../cart-page/CartPrice";
import { Link, useNavigate } from "react-router-dom";
import ShippingModal from "../modal/ShippingModal";
import axios from "axios";

export default function ShippingMain({ item }) {
  const { state, dispatch } = useProduct();
  const [showShippingModal, setShowShippingModal] = useState(false);

  const [displayAddrID, setDisplayAddrID] = useState();
  const navigate = useNavigate();

  console.log(displayAddrID, "display....");

  let selectedAddress = state.address.find(
    (item) => item._id === displayAddrID
  );

  console.log(selectedAddress, "addddddddddewwsre");
  function getTotalPrice(list) {
    return list.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.qty);
    }, 0);
  }

  async function orderPlaceHandle() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/orders",
        {
          order: {
            cart: state.cartList,
            address: selectedAddress,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(response, "orders ka response");

      if (response.status === 201) {
        dispatch({ type: "ADD_ORDERS", payload: response.data.orders });
        navigate("/order-success");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="ha-cart-gtr">
      <div className="cart-heading">
        <h3>MY CART ({state.cartList.length})</h3>
      </div>
      <div className="h-cart-container">
        {/* do below */}

        <div className="ha-selected-address">
          {selectedAddress && (
            <div>
              <p className="selected-address name"> {selectedAddress.name}</p>
              <p className="selected-address">
                {selectedAddress.flatno}, {selectedAddress.area}
              </p>
              <p className="selected-address">{selectedAddress.landmark}</p>
              <p className="selected-address">
                {selectedAddress.district}-{selectedAddress.state}
              </p>
              <p className="selected-address">{selectedAddress.pincode}</p>
              <p className="selected-address">{selectedAddress.mobile}</p>
              <p> </p>
            </div>
          )}
        </div>

        <div className="ha-address-wrap">
          <button
            className="btn btn-primary select-addr-btn"
            onClick={() => setShowShippingModal(true)}
          >
            Select Address
          </button>
        </div>

        {/* do above */}

        <div className="h-price-box">
          <div className="cart-price">PRICE DETAILS</div>
          <div className="blank-div"></div>
          <div className="h-prices">
            {state.cartList.map((item) => (
              <CartPrice key={item._id} item={item} />
            ))}

            <div className="blank-div"></div>
            <div className="item-pricee">
              <p className="total-price">TOTAL AMOUNT</p>
              <p>{getTotalPrice(state.cartList)}</p>
            </div>

            <div className="blank-div"></div>
            <div className="price-comment">
              You will save Rs1999 on this order
            </div>

            <button
              className={
                state.cartList.length > 0
                  ? "remove-btn price-btn"
                  : "remove-btn price-btn disabled-btn"
              }
              onClick={orderPlaceHandle}
              disabled={state.cartList.length > 0 ? false : true}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        {showShippingModal && (
          <ShippingModal
            setShowShippingModal={setShowShippingModal}
            displayAddr={displayAddrID}
            setDisplayAddrID={setDisplayAddrID}
          />
        )}
      </div>
    </main>
  );
}
