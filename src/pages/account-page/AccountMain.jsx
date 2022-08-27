import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth-context";
import { useProduct } from "../../product-context";
import AddressCard from "../address-page/AddressCard";
import Modal from "../modal/Modal";
import OrderCard from "../order-page/OrderCard";
import "./AccountPage";

export default function AccountMain() {
  const { state, dispatch } = useProduct();
  const { state: authState, dispatch: authDispatch } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [bgColor, setBgColor] = useState("#faeded");
  const [textColor, setTextColor] = useState("black");

  function highlightTab() {
    setBgColor("#c91212");
    setTextColor("white");
  }

  function showAddressModal() {
    setShowModal(true);
  }
  function logoutHandler() {
    localStorage.removeItem("authToken");
    authDispatch({ type: "SET_AUTH", payload: false });
  }
  useEffect(() => {
    async function getAddressData() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/address", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_ADDRESS", payload: response.data.address });
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAddressData();
  }, []);

  let userFirstName = localStorage.getItem("firstname");
  let userLastName = localStorage.getItem("lastname");
  let userEmail = localStorage.getItem("email");

  return (
    <div>
      <h2 className="ha-account-heading">My Account Details</h2>

      <div className="ha-account-section">
        <div className="ha-account-title">
          <ul
            className="ha-account-list"
            onClick={() => {
              setCurrentTab(0);
              highlightTab();
            }}
            style={
              currentTab === 0
                ? { backgroundColor: bgColor, color: textColor }
                : {}
            }
          >
            My Account
          </ul>
          <div className="blank-div"></div>
          <ul
            className="ha-account-list"
            onClick={() => {
              setCurrentTab(1);
              highlightTab();
            }}
            style={
              currentTab === 1
                ? { backgroundColor: bgColor, color: textColor }
                : {}
            }
          >
            Orders
          </ul>
          <div className="blank-div"></div>
          <ul
            className="ha-account-list"
            onClick={() => {
              setCurrentTab(2);
              highlightTab();
            }}
            style={
              currentTab === 2
                ? { backgroundColor: bgColor, color: textColor }
                : {}
            }
          >
            Address
          </ul>
          <div className="blank-div"></div>
          <ul
            className="ha-account-list"
            onClick={() => {
              setCurrentTab(3);
              highlightTab();
            }}
            style={
              currentTab === 3
                ? { backgroundColor: bgColor, color: textColor }
                : {}
            }
          >
            Settings
          </ul>
        </div>

        {currentTab === 0 && (
          <div className="ha-account-details">
            <h4>Personal Information</h4>
            <p>
              Name : {userFirstName} {userLastName}
            </p>
            <p>Email id : {userEmail}</p>
          </div>
        )}

        {currentTab === 1 && (
          <div className="ha-account-details">
            <div className="ha-order-heading">My Orders</div>

            {state.orders.length > 0 ? (
              <OrderCard />
            ) : (
              <h3 className="ha-absent-heading">No Order Available! </h3>
            )}
          </div>
        )}

        {currentTab === 2 && (
          <div className="ha-account-details address-display">
            <button className="ha-address-add" onClick={showAddressModal}>
              click to add new address
            </button>

            {state.address.map((adr) => {
              return <AddressCard adr={adr} />;
            })}
          </div>
        )}

        {currentTab === 3 && (
          <div className="ha-account-details">
            <h4 className="ha-setting-heading">My Settings</h4>

            {authState.isAuthenticated ? (
              <Link to="/login">
                <button
                  className="ha-nav-btn address-logout-btn"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <button className="ha-nav-btn">Login</button>
            )}
          </div>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
