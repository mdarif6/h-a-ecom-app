import img3 from "../../assets/images/winter1.jpg";
import img4 from "../../assets/images/winter2.jpg";
export default function NavImage() {
  return (
    <nav className="h-home-belowimg">
      <div className="below-image-container">
        <div className="h-image-wrapper">
          <div className="below-imgone">
            <img src={img3} alt="" />
          </div>
          <div className="below-img-text">
            <h3>NEW ARRIVALS</h3>
            <p>Winter Collection</p>
            <p>
              Check out our best Winter Collection to stay warm in style this
              season
            </p>
          </div>
        </div>
        <div className="h-image-wrapper">
          <div className="below-imgone">
            <img src={img4} alt="" />
          </div>
          <div className="below-img-text">
            <h3>NEW ARRIVALS</h3>
            <p>Winter Collection</p>
            <p>
              Check out our best Winter Collection to stay warm in style this
              season
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
