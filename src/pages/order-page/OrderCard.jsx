import React, { useEffect } from "react";
import "./OrderCard.css";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addOrders } from "../../features/productSlice";
export default function OrderCard() {
  const { cartList, orders } = useSelector((state) => state.products);
  const dispatchRedux = useDispatch();
  function getTotalPrice(list) {
    return list.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.qty);
    }, 0);
  }

  useEffect(() => {
    async function getOrderData() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/orders", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatchRedux(addOrders(response.data.orders));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getOrderData();
  }, []);

  return (
    <>
      <div className="card-for-order">
        <div className="card-desc order-cards">
          <div className="card-desc-top-details">
            <p className="order-confirmation">Order Confirmed</p>
            <p className="order-total-price">
              Total : <span> ₹{getTotalPrice(cartList)}</span>
            </p>
          </div>
          {orders.map((item) => {
            return item.order.cart.map((inner) => {
              return (
                <>
                  <div className="order-product-detials">
                    <div>
                      <img
                        className="order-card-img"
                        src={inner.image}
                        alt="product-image"
                      />
                    </div>
                    <div className="order-card-product-desc">
                      <p>
                        {inner.companyName} {inner.design}
                      </p>

                      <p>
                        Ship To: <span>{item.order.address.name}</span>
                      </p>
                      <p>
                        {item.order.address.flatno}
                        {item.order.address.landmark},
                        {item.order.address.district}
                        {item.order.address.pincode}
                      </p>
                      <p>Price: ₹{inner.price}</p>
                      <p>
                        <small>Size: {inner.size}</small>
                      </p>
                      <p>
                        <small>Quantity:{inner.qty}</small>
                      </p>
                    </div>
                  </div>
                </>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
