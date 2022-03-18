import HeaderHome from "./HeaderHome";
import AsideFilter from "./AsideFilter";
import FooterHome from "./FooterHome";
import Main from "./Main";

export default function ProductsPage() {
  return (
    <div className="ha-prod-content">
      <HeaderHome />
      <AsideFilter />
      <Main />
      <FooterHome />
    </div>
  );
}
