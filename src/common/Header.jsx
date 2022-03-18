import img1 from "../assets/images/logo.png";
export default function Header() {
  return (
    <header className="ha-header-gtr">
      <div className="ha-logo">
        <a href="#">
          <img src={img1} alt="logo-image" />
        </a>
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
            <a href="#">
              <button className="ha-nav-btn">Login</button>
            </a>

            <div className="badge-icon">
              <div className="badge-on-icon">
                <a href="/wishlist_page/wishlist_page.html">
                  <i className="fas fa-heart"></i>
                </a>
              </div>
              <span className="badge-number">0</span>
            </div>

            <div className="badge-icon">
              <div className="badge-on-icon">
                <a href="/cart_page/cart_page.html">
                  <i className="fas fa-shopping-cart"></i>
                </a>
                <span className="badge-number">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
