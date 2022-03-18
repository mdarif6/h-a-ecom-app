import img3 from "../../assets/images/Jeans1.JPG";
export default function Main() {
  return (
    <main className="ha-cart-gtr">
      <div className="cart-heading">
        <h3>MY CART (2)</h3>
      </div>
      <div className="h-cart-container">
        <div className="h-imagecart-wrapper">
          <div className="image-cart">
            <img src={img3} alt="" />
          </div>
          <div className="image-text">
            <h3>Jeans</h3>
            <p>Washed Slim Fit Jeans Offer</p>
            <p>Price: Rs. 12,60</p>
            <p>55%off</p>
            <p>Quantity:</p>
            <div className="image-cart-btn">
              <button className="remove-btn">Remove From Cart</button>
              <button className="move-btn">Move to Wishlist</button>
            </div>
          </div>
        </div>

        <div className="h-price-box">
          <div className="cart-price">PRICE DETAILS</div>
          <div className="blank-div"></div>
          <div className="h-prices">
            <div className="item-pricee">
              <p>Price (2 items)</p>
              <p>Rs 4999</p>
            </div>
            <div className="item-pricee">
              <p>Price (2 items)</p>
              <p>Rs 4999</p>
            </div>
            <div className="item-pricee">
              <p>Price (2 items)</p>
              <p>Rs 4999</p>
            </div>

            <div className="blank-div"></div>
            <div className="item-pricee">
              <p className="total-price">TOTAL AMOUNT</p>
              <p>Rs 3499</p>
            </div>

            <div className="blank-div"></div>
            <div className="price-comment">
              You will save Rs1999 on this order
            </div>
            <button className="remove-btn price-btn">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </main>
  );
}
