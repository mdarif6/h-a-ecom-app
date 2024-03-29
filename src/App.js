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
import AccountPage from "./pages/account-page/AccountPage";
import Modal from "./pages/modal/Modal";
import ShippingPage from "./pages/shipping-page/ShippingPage";
import ShippingModal from "./pages/modal/ShippingModal";
import OrderCard from "./pages/order-page/OrderCard";
import SuccessPage from "./pages/success-page/SuccessPage";
import ConfirmationModal from "./pages/modal/ConfirmationModal";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import LayoutComponent from "./pages/layout-component/LayoutComponent";
import { useSelector, useDispatch } from "react-redux";
import { settingAuthentication } from "../src/features/authSlice";

function App() {
  const { isAuthenticated } = useSelector((state) => state.authentication);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatchRedux(settingAuthentication(true));
    } else {
      dispatchRedux(settingAuthentication(false));
    }
  }, []);

  return (
    <div className="App">
      <LayoutComponent>
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
          {isAuthenticated ? (
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

export default App;
