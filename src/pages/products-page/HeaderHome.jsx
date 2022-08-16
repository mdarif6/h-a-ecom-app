import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo.png";
import { useAuth } from "../../auth-context";
import { useProduct } from "../../product-context";

export default function HeaderHome() {
  const { state, dispatch } = useProduct();
  const { state: authState, dispatch: authDispatch } = useAuth();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    authDispatch({ type: "SET_AUTH", payload: false });
  }

  return (
    <>
      <header className="ha-header">
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
              onChange={(e) => {
                dispatch({
                  type: "SEARCH_ENTER",

                  payload: { name: "SEARCH_ENTER", value: e.target.value },
                });
              }}
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

      <header className="ha-header-responsive">
        <div className="ha-header-content-wrapper">
          <div className="ha-logo-icons-wrapper">
            <div className="ha-logo">
              <Link to="/">
                <img src={img1} alt="logo-image" />
              </Link>
            </div>
            <Link className="ha-link-style" to="/products">
              <div className="ha-product-heading-responsive">PRODUCTS</div>
            </Link>
            <div className="search-and-icons">
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
                    <span className="badge-number">
                      {state.wishList.length}
                    </span>
                  </div>

                  <div className="badge-icon">
                    <div className="badge-on-icon">
                      <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                      </Link>

                      <span className="badge-number">
                        {state.cartList.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ha-search-box-home">
            <input
              className="ha-search-text-home"
              type="text"
              name="name"
              placeholder="search"
              onChange={(e) => {
                dispatch({
                  type: "SEARCH_ENTER",

                  payload: { name: "SEARCH_ENTER", value: e.target.value },
                });
              }}
            />
            <a className="ha-search-button-home" href="#">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
