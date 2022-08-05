import HeaderHome from "./HeaderHome";
import AsideFilter from "./AsideFilter";
import FooterHome from "./FooterHome";
import Main from "./Main";
import { useState } from "react";

export default function ProductsPage() {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="ha-prod-content">
      <HeaderHome />
      {showSideBar && <AsideFilter />}
      <Main setShowSideBar={setShowSideBar} />
      <FooterHome />
    </div>
  );
}
