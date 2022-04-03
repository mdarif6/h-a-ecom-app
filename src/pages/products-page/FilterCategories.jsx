import { useProduct } from "../../product-context";

export default function FilterCategories({ category }) {
  const { state, dispatch } = useProduct();

  return (
    <div key={category._id}>
      <input
        type="checkbox"
        id={category._id}
        checked={state.sortByCategory.some(
          (item) => item === category.categoryName
        )}
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
      <label for={category._id}>{category.categoryName}</label>
    </div>
  );
}
