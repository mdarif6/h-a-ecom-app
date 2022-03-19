import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <section className="ha-home-banner">
      <div className="h-categ-text">Proclaim your love with our gifts!</div>
      <div className="h-categ-btn">
        <Link to="/products">
          <button className="h-nav-btn">Men</button>
        </Link>

        <Link to="/products">
          <button className="h-nav-btn">Women</button>
        </Link>

        <Link to="/products">
          <button className="h-nav-btn">Kids</button>
        </Link>

        <Link to="/products">
          <button className="h-nav-btn">Indie</button>
        </Link>
      </div>
    </section>
  );
}
