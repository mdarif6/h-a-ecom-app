import React from "react";
import { useProduct } from "../../product-context";
import { useEffect } from "react";
import FilterCategories from "./FilterCategories";
export default function AsideFilterMobile() {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    fetch("api/categories")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_CATEGORIES", payload: data.categories })
      );
  }, []);

  return (
    <aside className="ha-aside-smallscreen">
      <div className="aside-top-heading">
        <h3>Filter</h3>
        <h3
          className="ha-clear-filter"
          onClick={() => {
            dispatch({ type: "SORTING", payload: "" });
            dispatch({ type: "RATING", payload: "" });
            dispatch({ type: "BY_RANGE", payload: { name: "", value: 0 } });
            dispatch({ type: "RESET_CATEGORY", payload: [] });
          }}
        >
          Clear
        </h3>
      </div>
      <h3>Price</h3>
      <div className="slider-container">
        <div className="label-container">
          <label htmlFor="100">100</label>
          <label htmlFor="1000">1500</label>
          <label htmlFor="3000">3000</label> <br />
        </div>

        <input
          type="range"
          step="100"
          min="100"
          max="3000"
          value={state.sortByRange.value}
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
          <div className="ha-rating-parent">
            <div>
              <input
                type="radio"
                id="4Stars"
                checked={state.sortByRating === "FOUR_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatch({ type: "RATING", payload: "FOUR_AND_ABOVE" })
                }
              />
              <label htmlFor="4Stars">4 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="3Stars"
                checked={state.sortByRating === "THREE_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatch({ type: "RATING", payload: "THREE_AND_ABOVE" })
                }
              />
              <label htmlFor="3Stars">3 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="2Stars"
                checked={state.sortByRating === "TWO_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatch({ type: "RATING", payload: "TWO_AND_ABOVE" })
                }
              />
              <label htmlFor="2Stars">2 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="1Stars"
                checked={state.sortByRating === "ONE_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatch({ type: "RATING", payload: "ONE_AND_ABOVE" })
                }
              />
              <label htmlFor="1Stars">1 Stars & above</label>
            </div>
          </div>
        </form>
      </div>

      <div className="sorting">
        <h3>Sort By Price</h3>

        <div className="ha-sorting-parent">
          <div>
            <input
              type="radio"
              id="LowtoHigh"
              checked={state.sortByPrice === "LOW_TO_HIGH"}
              name="h-radio"
              onChange={() =>
                dispatch({ type: "SORTING", payload: "LOW_TO_HIGH" })
              }
            />
            <label htmlFor="LowtoHigh">Low to High</label>
          </div>

          <div>
            <input
              type="radio"
              id="HightoLow"
              checked={state.sortByPrice === "HIGH_TO_LOW"}
              name="h-radio"
              onChange={() =>
                dispatch({ type: "SORTING", payload: "HIGH_TO_LOW" })
              }
            />
            <label htmlFor="HightoLow">High to Low</label>
          </div>
        </div>
      </div>
    </aside>
  );
}
