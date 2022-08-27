import AsideFilter from "./AsideFilter";
import Main from "./Main";
import { useState } from "react";
import AsideFilterMobile from "./AsideFilterMobile";

export default function ProductsPage() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="ha-prod-content">
      {<AsideFilter />}
      {showSideBar && <AsideFilterMobile />}
      <Main setShowSideBar={setShowSideBar} />
    </div>
  );
}
