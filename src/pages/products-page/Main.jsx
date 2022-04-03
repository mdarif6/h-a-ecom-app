import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import img3 from "../../assets/images/Jeans1.JPG";
import { products } from "../../backend/db/products";
import Spinner from "../../common/Spinner";
import { useProduct } from "../../product-context";
import ProductCard from "./ProductCard";

export default function Main() {
  const { state, dispatch } = useProduct();

  useEffect(() => {
    (async function showProducts() {
      try {
        dispatch({ type: "LOADER", payload: true });
        const response = await axios.get("api/products");
        dispatch({ type: "LOADER", payload: false });
        console.log(response.data.products);
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "SET_PRODUCTS", payload: response.data.products });
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: "LOADER", payload: false });
      }
    })();
  }, []);

  function sortingByPrice(items, sort) {
    if (sort === "LOW_TO_HIGH") {
      return items.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "HIGH_TO_LOW") {
      {
        return items.sort((a, b) => Number(b.price) - Number(a.price));
      }
    } else {
      return items;
    }
  }

  function sortingByRating(items, sort) {
    if (sort === "FOUR_AND_ABOVE") {
      return items.filter((item) => item.rating >= 4);
      // .sort((a, b) => b.rating - a.rating);
    } else if (sort === "THREE_AND_ABOVE") {
      return items.filter((item) => item.rating >= 3);
      // .sort((a, b) => b.rating - a.rating);
    } else if (sort === "TWO_AND_ABOVE") {
      return items.filter((item) => item.rating >= 2);
      // .sort((a, b) => b.rating - a.rating);
    } else if (sort === "ONE_AND_ABOVE") {
      return items.filter((item) => item.rating >= 1);
      // .sort((a, b) => b.rating - a.rating);
    } else {
      return items;
    }
  }

  function sortingByRange(items, range) {
    if (range.name === "BY_RANGE") {
      return items.filter(
        (item) =>
          Number(item.price) > 0 && Number(item.price) < Number(range.value)
      );
    } else {
      return items;
    }
  }

  function filterByCategory(items, categ) {
    if (categ.length !== 0) {
      return items.filter((item) => {
        if (categ.indexOf(item.category) !== -1) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return items;
    }
  }

  function filterBySearch(items, search) {
    if (search.name === "SEARCH_ENTER") {
      return items.filter((item) => {
        if (item.searchQuery.includes(search.value)) {
          return item;
        }
      });
    } else {
      return items;
    }
  }

  const setByPrice = sortingByPrice(state.products, state.sortByPrice);
  const setByRating = sortingByRating(setByPrice, state.sortByRating);
  const setByRange = sortingByRange(setByRating, state.sortByRange);
  const setByCategory = filterByCategory(setByRange, state.sortByCategory);
  const setBySearch = filterBySearch(setByCategory, state.searchQuery);

  return (
    <>
      {state.loader ? (
        <Spinner />
      ) : (
        <main>
          <div class="h-main-heading">
            Showing All Proucts
            <small>(Showing {setByCategory.length} products)</small>
          </div>

          <div class="ha-grid-main">
            {setBySearch &&
              setBySearch.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
          </div>
        </main>
      )}
    </>
  );
}
