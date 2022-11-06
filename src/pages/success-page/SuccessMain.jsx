import React from "react";
import "./SuccessPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SuccessMain() {
  const navigate = useNavigate();
  const { orders } = useSelector((state) => state.products);

  const getUserName = orders.map((item) => item.order.address.name);

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
          className="btn btn-primary"
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
