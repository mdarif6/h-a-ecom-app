import { Link } from "react-router-dom";
import { useProduct } from "../../product-context";
import CartCard from "./CartCard";
import CartPrice from "./CartPrice";

export default function Main() {
  const { state, dispatch } = useProduct();

  function getTotalPrice(list) {
    return list.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.qty);
    }, 0);
  }

  return (
    <main className="ha-cart-gtr">
      <div className="cart-heading">
        <h3>MY CART ({state.cartList.length})</h3>
      </div>
      <div className="h-cart-container">
        <div className="card-wrap">
          {state.cartList.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>

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
            <div className="price-comment">You will save 55% on this order</div>
            <Link to="/shipping">
              <button
                className={
                  state.cartList.length > 0
                    ? "remove-btn price-btn"
                    : "remove-btn price-btn disabled-btn"
                }
                disabled={state.cartList.length > 0 ? false : true}
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
