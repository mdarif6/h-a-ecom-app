import React from "react";
import { useProduct } from "../../product-context";
import "./SuccessPage.css";
import { Link, useNavigate } from "react-router-dom";

export default function SuccessMain() {
  const { state, dispatch } = useProduct();
  const navigate = useNavigate();

  const getUserName = state.orders.map((item) => item.order.address.name);

  return (
    <div className="order-success-wrapper">
      <div className="order-success-child">
        <div className="success-greeting">
          Congratulations Mr <span>{getUserName}</span>
        </div>
        <p className="success-heading">
          Your order has been placed successfully
        </p>

        <button
          className="btn "
          onClick={() => {
            navigate("/my-account");
          }}
        >
          View Your Orders
        </button>
      </div>
    </div>
  );
}
