import "./App.css";
import React from "react";
import ProductsPage from "./pages/products-page/ProductsPage";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import WishList from "./pages/wishlist-page/WishList";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { useAuth } from "./auth-context";
import AccountPage from "./pages/account-page/AccountPage";
import Modal from "./pages/modal/Modal";
import ShippingPage from "./pages/shipping-page/ShippingPage";
import ShippingModal from "./pages/modal/ShippingModal";
import OrderCard from "./pages/order-page/OrderCard";
import SuccessPage from "./pages/success-page/SuccessPage";
import ConfirmationModal from "./pages/modal/ConfirmationModal";

function App() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch({ type: "SET_AUTH", payload: true });
    } else {
      dispatch({ type: "SET_AUTH", payload: false });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        {state.isAuthenticated ? (
          <Route path="/products" element={<ProductsPage />} />
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
          </>
        )}

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/my-account" element={<AccountPage />} />
        <Route path="shipping" element={<ShippingPage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/smodal" element={<ShippingModal />} />
        <Route path="/confirmation" element={<ConfirmationModal />} />
        <Route path="/order" element={<OrderCard />} />
        <Route path="/order-success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
