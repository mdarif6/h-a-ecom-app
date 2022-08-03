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

  return (
    <div>
      <h2 className="ha-account-heading">My Account Details</h2>

      <div className="ha-account-section">
        <div className="ha-account-title">
          <ul className="ha-account-list" onClick={() => setCurrentTab(0)}>
            My Account
          </ul>
          <div className="blank-div"></div>
          <ul className="ha-account-list" onClick={() => setCurrentTab(1)}>
            Orders
          </ul>
          <div className="blank-div"></div>
          <ul className="ha-account-list" onClick={() => setCurrentTab(2)}>
            Address
          </ul>
          <div className="blank-div"></div>
          <ul className="ha-account-list" onClick={() => setCurrentTab(3)}>
            Settings
          </ul>
        </div>

        {currentTab === 0 && (
          <div className="ha-account-details">
            <h4>Personal Information</h4>
            <p>
              Name : {authState.userInfo.firstName}
              {authState.userInfo.lastName} {authState.userInfo.name}
            </p>
            <p>Email id : {authState.userInfo.email}</p>
          </div>
        )}

        {currentTab === 1 && (
          <div className="ha-account-details">
            <div className="ha-order-heading">My Orders</div>

            {state.orders.length > 0 ? <OrderCard /> : <h3>No Order</h3>}
          </div>
        )}

        {currentTab === 2 && (
          <div className="ha-account-details address-display">
            <button className="ha-address-add" onClick={showAddressModal}>
              Add new address
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

        {/* <div className="ha-account-details">
            <form onSubmit={saveClickHandler}>
              <div className="ha-address-form">
                <div className="ha-addheading-and-icon">
                  <h3>Add new address</h3>
                  <i class="fas fa-times"></i>
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Pin Code"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Locality/Area/Street"
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Flat number/ Building Name"
                    onChange={(e) => setFlatno(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="Landmark"
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="District/City"
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="ha-address-input"
                    type="text"
                    placeholder="State"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <button>Save</button>
            </form>
          </div> */}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
