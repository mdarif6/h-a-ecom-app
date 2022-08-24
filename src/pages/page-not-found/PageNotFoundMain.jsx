import React from "react";
import "./PageNotFound.css";
import errorimage from "../../assets/images/Error 404.JPG";
import { Link } from "react-router-dom";
export default function PageNotFoundMain() {
  return (
    <div>
      <div className="ha-error-page">
        <img src={errorimage} alt="error-image" />
      </div>
      <div className="ha-error-msg">
        <h3>Sorry, this page isn't available</h3>
        <small>
          The link you followed may be broken, or the page may have been
          removed.
        </small>

        <Link className="link-style" to="/">
          <p className="main-heading">
            Go back to <span>Home Page</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
