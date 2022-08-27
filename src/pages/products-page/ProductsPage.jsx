import HeaderHome from "./HeaderHome";
import AsideFilter from "./AsideFilter";
import FooterHome from "./FooterHome";
import Main from "./Main";
import { useState } from "react";
import AsideFilterMobile from "./AsideFilterMobile";

export default function ProductsPage() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="ha-prod-content">
      {/* <HeaderHome /> */}
      {<AsideFilter />}
      {showSideBar && <AsideFilterMobile />}
      <Main setShowSideBar={setShowSideBar} />
      {/* <FooterHome /> */}
    </div>
  );
}
