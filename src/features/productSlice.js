import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loader: false,
  products: [],
  sortByPrice: "",
  sortByRating: "",
  sortByRange: 3000,
  // sortByRange: { name: "", value: 0 },
  categories: [],
  sortByCategory: [],
  searchQuery: "",
  cartList: [],
  wishList: [],
  address: [],
  orders: [],
  selectedAdr: {},
};

export const productSlice = createSlice({
  name: "filteringAndSorting",
  initialState: initialState,
  reducers: {
    loaderLoading: (state, action) => {
      return { ...state, loader: action.payload };
    },
    productsOnUI: (state, action) => {
      return { ...state, products: action.payload };
    },
    sortingByLowHighPrice: (state, action) => {
      return { ...state, sortByPrice: action.payload };
    },
    sortingByStarRating: (state, action) => {
      return { ...state, sortByRating: action.payload };
    },
    filteringByRange: (state, action) => {
      return { ...state, sortByRange: action.payload };
    },
    settingCategories: (state, action) => {
      return { ...state, categories: action.payload };
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        sortByCategory: [...state.sortByCategory, action.payload],
      };
    },
    unSelectCategory: (state, action) => {
      const removalCategory = [...state.sortByCategory];
      const removalIndex = removalCategory.indexOf(action.payload);
      removalCategory.splice(removalIndex, 1);
      return { ...state, sortByCategory: removalCategory };
    },
    clearCategories: (state, action) => {
      return { ...state, sortByCategory: action.payload };
    },
    searchingProduct: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
    addToCart: (state, action) => {
      return {
        ...state,
        cartList: [...state.cartList, { ...action.payload, qty: 1 }],
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartList: state.cartList.filter((c) => c.id !== action.payload.id),
      };
    },
    cartUpdate: (state, action) => {
      return { ...state, cartList: action.payload };
    },
    addToWishList: (state, action) => {
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };
    },
    removeFromWishList: (state, action) => {
      return {
        ...state,
        wishList: state.wishList.filter((c) => c.id !== action.payload.id),
      };
    },
    wishListUpdate: (state, action) => {
      return { ...state, wishList: action.payload };
    },
    incrementQuantity: (state, action) => {
      const newCartList = [...state.cartList];
      const cartItemIndex = newCartList.findIndex(
        (item) => item._id === action.payload
      );

      const quantityUpdate = { ...newCartList[cartItemIndex] };
      quantityUpdate.qty = quantityUpdate.qty + 1;
      newCartList.splice(cartItemIndex, 1, quantityUpdate);
      return { ...state, cartList: newCartList };
    },
    decrementQuantity: (state, action) => {
      const newCartListForDecrement = [...state.cartList];
      const cartItemIndexForDecrement = newCartListForDecrement.findIndex(
        (item) => item._id === action.payload
      );
      const quantityUpdateForDecrement = {
        ...newCartListForDecrement[cartItemIndexForDecrement],
      };
      quantityUpdateForDecrement.qty = quantityUpdateForDecrement.qty - 1;
      newCartListForDecrement.splice(
        cartItemIndexForDecrement,
        1,
        quantityUpdateForDecrement
      );
      return { ...state, cartList: newCartListForDecrement };
    },
    addAddress: (state, action) => {
      return { ...state, address: action.payload };
    },
    addOrders: (state, action) => {
      return { ...state, orders: action.payload };
    },
    addSelectedAddress: (state, action) => {
      return { ...state, selectedAdr: action.payload };
    },
  },
});

export const {
  loaderLoading,
  productsOnUI,
  sortingByLowHighPrice,
  sortingByStarRating,
  filteringByRange,
  settingCategories,
  selectCategory,
  unSelectCategory,
  clearCategories,
  searchingProduct,
  addToCart,
  removeFromCart,
  cartUpdate,
  addToWishList,
  removeFromWishList,
  wishListUpdate,
  incrementQuantity,
  decrementQuantity,
  addAddress,
  addOrders,
  addSelectedAddress,
} = productSlice.actions;
export default productSlice.reducer;
