import CategorySection from "./CategorySection";
import MainImage from "./MainImage";
import NavImage from "./NavImage";

export default function HomePage() {
  return (
    <div>
      <div className="ha-content">
        <CategorySection />
        <MainImage />
        <NavImage />
      </div>
    </div>
  );
}
