import { Link } from "react-router-dom";
import img1 from "../assets/images/logo.png";
import { useProduct } from "../product-context";
export default function Header() {
  const { state, dispatch } = useProduct();
  return (
    <header className="ha-header-gtr">
      <div className="ha-logo">
        <Link to="/">
          <img src={img1} alt="logo-image" />
        </Link>
      </div>

      <div className="search-and-icons">
        <div className="ha-search-box">
          <input
            className="ha-search-text"
            type="text"
            name="name"
            placeholder="search"
          />
          <a className="ha-search-button" href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <div className="header-icons">
          <div className="ha-nav-icons">
            <Link to="/login">
              <button className="ha-nav-btn">Login</button>
            </Link>

            <div className="badge-icon">
              <div className="badge-on-icon">
                <Link to="/wishlist">
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
              <span className="badge-number">{state.wishList.length}</span>
            </div>

            <div className="badge-icon">
              <div className="badge-on-icon">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>

                <span className="badge-number">{state.cartList.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
