import { useEffect } from "react";
import FilterCategories from "./FilterCategories";
import { useSelector, useDispatch } from "react-redux";
import {
  sortingByLowHighPrice,
  sortingByStarRating,
  filteringByRange,
  settingCategories,
  clearCategories,
} from "../../features/productSlice";

export default function AsideFilter() {
  const { sortByPrice, sortByRating, sortByRange, categories } = useSelector(
    (state) => state.products
  );
  const dispatchRedux = useDispatch();

  useEffect(() => {
    fetch("api/categories")
      .then((response) => response.json())
      .then((data) => dispatchRedux(settingCategories(data.categories)));
  }, []);

  return (
    <aside className="ha-aside">
      <div className="aside-top-heading">
        <h3>Filter</h3>
        <h3
          className="ha-clear-filter"
          onClick={() => {
            dispatchRedux(sortingByLowHighPrice(""));

            dispatchRedux(sortingByStarRating(""));

            dispatchRedux(filteringByRange(3000));

            dispatchRedux(clearCategories([]));
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
          onChange={(e) => {
            dispatchRedux(filteringByRange(e.target.value));
          }}
        />
      </div>

      <div className="h-aside-categ">
        <h3>Category</h3>
      </div>

      <form action="check">
        {categories.map((category) => (
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
                value="FOUR_AND_ABOVE"
                checked={sortByRating === "FOUR_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatchRedux(sortingByStarRating("FOUR_AND_ABOVE"))
                }
              />
              <label htmlFor="4Stars">4 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="3Stars"
                value="THREE_AND_ABOVE"
                checked={sortByRating === "THREE_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatchRedux(sortingByStarRating("THREE_AND_ABOVE"))
                }
              />
              <label htmlFor="3Stars">3 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="2Stars"
                value="TWO_AND_ABOVE"
                checked={sortByRating === "TWO_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatchRedux(sortingByStarRating("TWO_AND_ABOVE"))
                }
              />
              <label htmlFor="2Stars">2 Stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="1Stars"
                value="ONE_AND_ABOVE"
                checked={sortByRating === "ONE_AND_ABOVE"}
                name="h-radio"
                onChange={() =>
                  dispatchRedux(sortingByStarRating("ONE_AND_ABOVE"))
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
            <div>
              <label htmlFor="LowtoHigh">
                <input
                  type="radio"
                  id="LowtoHigh"
                  value="LOW_TO_HIGH"
                  checked={sortByPrice === "LOW_TO_HIGH"}
                  onChange={(e) =>
                    dispatchRedux(sortingByLowHighPrice(e.target.value))
                  }
                />
                Low to High
              </label>
            </div>
            <div>
              <label htmlFor="HightoLow">
                <input
                  type="radio"
                  id="HightoLow"
                  value="HIGH_TO_LOW"
                  checked={sortByPrice === "HIGH_TO_LOW"}
                  onChange={(e) =>
                    dispatchRedux(sortingByLowHighPrice(e.target.value))
                  }
                />
                High to Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
