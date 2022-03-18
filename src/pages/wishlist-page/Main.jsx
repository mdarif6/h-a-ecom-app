import img3 from "../../assets/images/Jeans1.JPG";
export default function () {
  return (
    <main className="ha-wish-gtr">
      <div className="wishlist-heading">
        <h3>My Wishlist</h3>
      </div>
      <div className="ha-main-wishlist-product">
        <div className="h-grid-product">
          <img src={img3} alt="" />
          <div className="h-product-icon wish-listed">
            <i className="fas fa-heart"></i>
          </div>

          <div className="h-product-bottom">
            <p className="product-name">Jeans</p>
            <p className="product-desc">Washed Slim Fit Jeans</p>
            <p className="product-desc">
              Offer Price: <small>Rs.12,60</small>
            </p>

            <button className="h-product-button">Add to Cart</button>
          </div>
        </div>
        <div className="h-grid-product">
          <img src={img3} alt="" />
          <div className="h-product-icon wish-listed">
            <i className="fas fa-heart"></i>
          </div>

          <div className="h-product-bottom">
            <p className="product-name">Jeans</p>
            <p className="product-desc">Washed Slim Fit Jeans</p>
            <p className="product-desc">
              Offer Price: <small>Rs.12,60</small>
            </p>

            <button className="h-product-button">Add to Cart</button>
          </div>
        </div>
        <div className="h-grid-product">
          <img src={img3} alt="" />
          <div className="h-product-icon wish-listed">
            <i className="fas fa-heart"></i>
          </div>

          <div className="h-product-bottom">
            <p className="product-name">Jeans</p>
            <p className="product-desc">Washed Slim Fit Jeans</p>
            <p className="product-desc">
              Offer Price: <small>Rs.12,60</small>
            </p>

            <button className="h-product-button">Add to Cart</button>
          </div>
        </div>
        <div className="h-grid-product">
          <img src={img3} alt="" />
          <div className="h-product-icon wish-listed">
            <i className="fas fa-heart"></i>
          </div>

          <div className="h-product-bottom">
            <p className="product-name">Jeans</p>
            <p className="product-desc">Washed Slim Fit Jeans</p>
            <p className="product-desc">
              Offer Price: <small>Rs.12,60</small>
            </p>

            <button className="h-product-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
