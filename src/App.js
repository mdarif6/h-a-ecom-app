import "./App.css";
import React from "react";
import ProductsPage from "./pages/products-page/ProductsPage";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import WishList from "./pages/wishlist-page/WishList";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
