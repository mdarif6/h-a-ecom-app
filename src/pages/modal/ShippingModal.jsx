import React from "react";
import { Link } from "react-router-dom";

import AddressShipCard from "../address-page/AddressShipCard";
import { useSelector } from "react-redux";

export default function ShippingModal({
  setDisplayAddrID,
  setShowShippingModal,
}) {
  const { address } = useSelector((state) => state.products);

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

          {address.length > 0 ? (
            <div>
              {address.map((adr) => {
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
