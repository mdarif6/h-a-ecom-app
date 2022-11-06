import { useSelector, useDispatch } from "react-redux";
import { selectCategory, unSelectCategory } from "../../features/productSlice";
export default function FilterCategories({ category }) {
  const { sortByCategory } = useSelector((state) => state.products);
  const dispatchRedux = useDispatch();

  return (
    <div key={category._id}>
      <input
        type="checkbox"
        id={category._id}
        checked={sortByCategory.some((item) => item === category.categoryName)}
        onChange={(e) => {
          if (e.target.checked) {
            dispatchRedux(selectCategory(category.categoryName));
          } else {
            dispatchRedux(unSelectCategory(category.categoryName));
          }
        }}
      />
      <label htmlFor={category._id}>{category.categoryName}</label>
    </div>
  );
}
