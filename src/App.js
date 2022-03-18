import "./App.css";
import React from "react";
import ProductsPage from "./pages/products-page/ProductsPage";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import WishList from "./pages/wishlist-page/WishList";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductsPage />
      <CartPage />
      <WishList />
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default App;
