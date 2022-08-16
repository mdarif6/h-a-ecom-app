import React, { useEffect, useState } from "react";
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

          {/* <button
            className="btn outline-primary shipping-modal-close"
            onClick={() => setShowShippingModal(false)}
          >
            Close
          </button> */}

          {state.address.length > 0 ? (
            <div>
              {state.address.map((adr) => {
                // <div className="address-and-radio">
                //   <input
                //     className="address-radio"
                //     name="address"
                //     type="radio"
                //     value={item._id}
                //     onChange={(e) => setDisplayAddrID(e.target.value)}
                //   />
                //   <AddressCard adr={item} />;
                // </div>
                //line 33 par setDisplayAddrID jo pass kiya wo andaje se kiya but why
                return (
                  <>
                    <AddressShipCard
                      adr={adr}
                      setDisplayAddrID={setDisplayAddrID}
                    />

                    {/* <div
                class="card card-dismiss card-for-modal shipping-radio"
                key={adr._id}
              >
                <input
                  className="address-radio"
                  name="address"
                  type="radio"
                  value={adr._id}
                  onChange={(e) => setDisplayAddrID(e.target.value)}
                />

                <div className="without-radio">
                  <div class="card-content">
                    <h4 class="card-title">{adr.name}</h4>

                    <div class="card-desc">
                      <p>
                        {adr.flatno}
                        {adr.pincode}
                      </p>
                      <p>{adr.area}</p>
                      <p> {adr.landmark}</p>
                      <p>
                        {adr.district} {adr.state}
                      </p>
                      <p>Phone : {adr.mobile}</p>
                    </div>
                  </div>
                  <div class="card-footer btn-address-parent">
                    <div class="card-btn btn-address">
                      <button
                        class="btn btn-primary btn-edit"
                        onClick={() => setShowEditModal(true)}
                      >
                        Edit
                      </button>
                      <button
                        class="btn outline-primary btn-delete"
                        onClick={() => deleteAddressHandle(adr)}
                      >
                        Delete
                      </button>
                    </div>
                    <div class="card-link"></div>
                  </div>
                </div>
              </div>

              {showEditModal && (
                <EditModal setShowModal={setShowEditModal} adr={adr} />
              )} */}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
