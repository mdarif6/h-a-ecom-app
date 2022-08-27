import HeaderHome from "./HeaderHome";
import CategorySection from "./CategorySection";
import MainImage from "./MainImage";
import NavImage from "./NavImage";
import FooterHome from "./FooterHome";

export default function HomePage() {
  return (
    <div>
      <div className="ha-content">
        {/* <HeaderHome /> */}
        <CategorySection />
        <MainImage />
        <NavImage />
        {/* <FooterHome /> */}
      </div>
    </div>
  );
}
