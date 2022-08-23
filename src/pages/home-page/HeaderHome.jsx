import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo.png";
import { useAuth } from "../../auth-context";
import { useProduct } from "../../product-context";

export default function HeaderHome() {
  const { state, dispatch } = useProduct();
  const { state: authState, dispatch: authDispatch } = useAuth();

  return (
    <>
      <header className="ha-header-home">
        <div className="ha-logo">
          <Link to="/">
            <img src={img1} alt="logo-image" />
          </Link>
        </div>
        <Link className="ha-link-style" to="/products">
          <div className="ha-product-heading ">PRODUCTS</div>
        </Link>
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
              {authState.isAuthenticated ? (
                <div className="badge-icon">
                  <div className="badge-on-icon">
                    <Link to="/my-account">
                      <i className="fas fa-user-circle"></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="ha-nav-btn">Login</button>
                </Link>
              )}

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
    </>
  );
}
