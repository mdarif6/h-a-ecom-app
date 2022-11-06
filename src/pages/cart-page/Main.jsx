import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import CartPrice from "./CartPrice";
import { useSelector } from "react-redux";

export default function Main() {
  const { cartList } = useSelector((state) => state.products);

  function getTotalPrice(list) {
    return list.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.qty);
    }, 0);
  }

  return (
    <main className="ha-cart-gtr">
      <div className="cart-heading">
        <h2>MY CART ({cartList.length})</h2>
      </div>
      <div className="h-cart-container">
        <div className="card-wrap">
          {cartList.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>

        <div className="h-price-box">
          <div className="cart-price">PRICE DETAILS</div>
          <div className="blank-div"></div>
          <div className="h-prices">
            {cartList.map((item) => (
              <CartPrice key={item._id} item={item} />
            ))}

            <div className="blank-div"></div>
            <div className="item-pricee">
              <p className="total-price">TOTAL AMOUNT</p>
              <p>{getTotalPrice(cartList)}</p>
            </div>

            <div className="blank-div"></div>
            <div className="price-comment">You will save 55% on this order</div>
            <Link to="/shipping">
              <button
                className={
                  cartList.length > 0
                    ? "remove-btn price-btn"
                    : "remove-btn price-btn disabled-btn"
                }
                disabled={cartList.length > 0 ? false : true}
              >
                PROCEED TO SHIPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
