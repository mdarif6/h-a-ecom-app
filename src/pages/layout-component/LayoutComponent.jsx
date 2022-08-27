import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "./LayoutComponent.css";
export default function LayoutComponent({ children }) {
  return (
    <div>
      <Header />
      <div className="ha-layout-maincontent">{children}</div>

      <Footer />
    </div>
  );
}
