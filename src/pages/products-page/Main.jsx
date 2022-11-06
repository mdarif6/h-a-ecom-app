import axios from "axios";
import { useEffect } from "react";
import Spinner from "../../common/Spinner";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { loaderLoading, productsOnUI } from "../../features/productSlice";

export default function Main({ setShowSideBar }) {
  const {
    loader,
    products,
    sortByPrice,
    sortByRating,
    sortByRange,
    sortByCategory,
    searchQuery,
  } = useSelector((state) => state.products);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    (async function showProducts() {
      try {
        dispatchRedux(loaderLoading(true));
        const response = await axios.get("api/products");

        dispatchRedux(loaderLoading(false));

        if (response.status === 200 || response.status === 201) {
          dispatchRedux(productsOnUI(response.data.products));
        }
      } catch (error) {
        console.log(error);

        dispatchRedux(loaderLoading(false));
      }
    })();
  }, []);

  function sortingByPrice(items, sort) {
    let itemsCopy = [...items];

    if (sort === "LOW_TO_HIGH") {
      return itemsCopy.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "HIGH_TO_LOW") {
      return itemsCopy.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      return itemsCopy;
    }
  }

  function sortingByRating(items, sort) {
    if (sort === "FOUR_AND_ABOVE") {
      return items.filter((item) => item.rating >= 4);
    } else if (sort === "THREE_AND_ABOVE") {
      return items.filter((item) => item.rating >= 3);
    } else if (sort === "TWO_AND_ABOVE") {
      return items.filter((item) => item.rating >= 2);
    } else if (sort === "ONE_AND_ABOVE") {
      return items.filter((item) => item.rating >= 1);
    } else {
      return items;
    }
  }

  function sortingByRange(items, range) {
    return items.filter(
      (item) => Number(item.price) > 0 && Number(item.price) < range
    );
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
    return items.filter((item) => {
      if (item.design.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
  }

  const setByPrice = sortingByPrice(products, sortByPrice);
  const setByRating = sortingByRating(setByPrice, sortByRating);
  const setByRange = sortingByRange(setByRating, sortByRange);
  const setByCategory = filterByCategory(setByRange, sortByCategory);
  const setBySearch = filterBySearch(setByCategory, searchQuery);
  function showHideHandle() {
    setShowSideBar((previous) => !previous);
  }

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <>
          <i className="fas fa-bars burger-menu" onClick={showHideHandle}></i>
          <main>
            <div className="h-main-heading">
              Showing All Proucts
              <small>(Showing {setBySearch.length} products)</small>
            </div>

            <div className="ha-grid-main">
              {setBySearch.length > 0 &&
                setBySearch.map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
            </div>
          </main>
        </>
      )}
    </>
  );
}
