import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import { useProduct } from "../../product-context";
import AddressCard from "../address-page/AddressCard";
import AddressShipCard from "../address-page/AddressShipCard";
import EditModal from "../modal/EditModal";

export default function ShippingModal({
  displayAddrID,
  setDisplayAddrID,
  setShowShippingModal,
}) {
  const { state, dispatch } = useProduct();

  return (
    <div className="ha-shipping-modal-wrapper">
      <div className="address-and-closebtn">
        <div className="address-and-btn-wrapper">
          <div className="address-close">
            <div></div>
            <i
              className="fas fa-times shipping-modal-close"
              onClick={() => setShowShippingModal(false)}
            ></i>
          </div>

          {state.address.length > 0 ? (
            <div>
              {state.address.map((adr) => {
                return (
                  <>
                    <AddressShipCard
                      adr={adr}
                      setDisplayAddrID={setDisplayAddrID}
                    />
                  </>
                );
              })}
            </div>
          ) : (
            <div>
              <p className="blank-address-popup">
                You did not added any address
              </p>
              <p className="blank-address-popup">
                Please add your address first and come back to place order
              </p>
              <p className="gotoaddress">
                <Link to="/my-account">
                  <button className="btn btn-gotoaddress">Go to Address</button>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
