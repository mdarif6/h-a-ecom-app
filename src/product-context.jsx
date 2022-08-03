import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
const ProductContext = createContext();

const initialState = {
  sortByPrice: "",
  sortByRating: "",
  sortByRange: { name: "", value: 0 },
  searchQuery: "",
  filterBySize: [],
  sortByCategory: [],
  products: [],
  categories: [],
  cartList: [],
  wishList: [],
  cartPrice: [],
  loader: false,
  address: [],
  orders: [],
  selectedAdr: {},
};

function productReducer(state, action) {
  switch (action.type) {
    case "LOADER":
      return { ...state, loader: action.payload };

    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter((c) => c.id !== action.payload.id),
      };
    case "CART_UPDATE":
      return {
        ...state,
        cartList: action.payload,
      };
    case "WISHLIST_UPDATE":
      return {
        ...state,
        wishList: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((c) => c.id !== action.payload.id),
      };

    case "INCREMENT":
      //Copy the cartList array
      const newCartList = [...state.cartList];
      // find the indexOf of current clicked item
      const cartIndex = newCartList.findIndex(
        (item) => item._id === action.payload
      );

      //copy the current item object
      const qtyUpdate = { ...newCartList[cartIndex] };
      //update quantity
      qtyUpdate.qty = qtyUpdate.qty + 1;
      //replace previous object with updated object
      newCartList.splice(cartIndex, 1, qtyUpdate);

      return { ...state, cartList: newCartList };

    case "DECREMENT":
      const newCartListD = [...state.cartList];
      const cartIndexD = newCartListD.findIndex(
        (item) => item._id === action.payload
      );
      const qtyUpdateD = { ...newCartListD[cartIndexD] };
      qtyUpdateD.qty = qtyUpdateD.qty - 1;
      newCartListD.splice(cartIndexD, 1, qtyUpdateD);
      return { ...state, cartList: newCartListD };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SORTING":
      return { ...state, sortByPrice: action.payload };

    case "SEARCH_ENTER":
      // return {
      //   ...state,
      //   searchQuery: [
      //     [...state.searchQuery],
      //     { name: action.payload.name, value: action.payload.value },
      //   ],
      // };

      return {
        ...state,
        searchQuery: action.payload,
      };

    case "RATING":
      return { ...state, sortByRating: action.payload };

    case "BY_RANGE":
      return {
        ...state,
        sortByRange: { name: action.payload.name, value: action.payload.value },
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        sortByCategory: [...state.sortByCategory, action.payload],
      };
    case "REMOVE_CATEGORY":
      const removalCategory = [...state.sortByCategory];
      const indexRemoval = removalCategory.indexOf(action.payload);
      removalCategory.splice(indexRemoval, 1);

      return { ...state, sortByCategory: removalCategory };
    case "RESET_CATEGORY":
      return { ...state, sortByCategory: action.payload };

    case "ADD_ADDRESS":
      return { ...state, address: action.payload };

    case "ADD_ORDERS":
      return { ...state, orders: action.payload };

    case "ADD_SELECTED_ADDR":
      return { ...state, selectedAdr: action.payload };

    // case "DELETE_ADDRESS":
    //   const updatedAddress = state.address.filter((item) => {
    //     item._id !== action.payload;
    //   });

    // return { ...state, address: updatedAddress };

    default:
      return state;
  }
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [loader, setLoader] = useState(false);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
