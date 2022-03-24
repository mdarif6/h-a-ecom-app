import { useProduct } from "../../product-context";

export default function FilterCategories({ category }) {
  const { dispatch } = useProduct();
  return (
    <div key={category._id}>
      <input
        type="checkbox"
        name="category1"
        id="category1"
        value="men"
        onChange={(e) => {
          if (e.target.checked) {
            dispatch({ type: "ADD_CATEGORY", payload: category.categoryName });
          } else {
            dispatch({
              type: "REMOVE_CATEGORY",
              payload: category.categoryName,
            });
          }
        }}
      />
      <label for="category1">{category.categoryName}</label>
    </div>
  );
}
