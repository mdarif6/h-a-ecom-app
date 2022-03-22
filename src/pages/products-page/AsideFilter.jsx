import { useProduct } from "../../product-context";
import { useEffect } from "react";
import FilterCategories from "./FilterCategories";
export default function AsideFilter() {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    fetch("api/categories")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_CATEGORIES", payload: data.categories })
      );
  }, []);

  return (
    <aside className="ha-aside">
      <div className="aside-top-heading">
        <h3>Filter</h3>
        <h3>Clear</h3>
      </div>
      <h3>Price</h3>
      <div className="slider-container">
        <div className="label-container">
          <label for="100">100</label>
          <label for="1000">1500</label>
          <label for="3000">3000</label> <br />
        </div>

        <input
          type="range"
          step="100"
          min="100"
          max="3000"
          onChange={(e) => {
            dispatch({
              type: "BY_RANGE",
              payload: { name: "BY_RANGE", value: e.target.value },
            });
          }}
        />
      </div>

      <div className="h-aside-categ">
        <h3>Category</h3>
      </div>

      <form action="check">
        {state.categories.map((category) => (
          <FilterCategories key={category._id} category={category} />
        ))}
      </form>

      <div className="rating">
        <h3>Rating</h3>

        <form action="radio">
          <div>
            <input
              type="radio"
              id="4 Stars & above"
              value="4 Stars & above"
              name="h-radio"
              onChange={() => dispatch({ type: "FOUR_AND_ABOVE" })}
            />
            <label for="4 Stars & above">4 Stars & above</label>
          </div>

          <div>
            <input
              type="radio"
              id="3 Stars & above"
              value="3 Stars & above"
              name="h-radio"
              onChange={() => dispatch({ type: "THREE_AND_ABOVE" })}
            />
            <label for="3 Stars & above">3 Stars & above</label>
          </div>

          <div>
            <input
              type="radio"
              id="2 Stars & above"
              value="2 Stars & above"
              name="h-radio"
              onChange={() => dispatch({ type: "TWO_AND_ABOVE" })}
            />
            <label for="2 Stars & above">2 Stars & above</label>
          </div>

          <div>
            <input
              type="radio"
              id="1 Stars & above"
              value="4 Stars & above"
              name="h-radio"
              onChange={() => dispatch({ type: "ONE_AND_ABOVE" })}
            />
            <label for="1 Stars & above">1 Stars & above</label>
          </div>
        </form>
      </div>

      <div className="sorting">
        <h3>Sort By Price</h3>
        <form action="radio">
          <div>
            <input
              type="radio"
              id="price value"
              value="Price - Low to High"
              name="h-radio"
              onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            <label for="Low to High">Low to High</label>
          </div>

          <div>
            <input
              type="radio"
              id="price value"
              value="High to Low"
              name="h-radio"
              onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            <label for="Price - High to Low">High to Low</label>
          </div>
        </form>
      </div>
    </aside>
  );
}
