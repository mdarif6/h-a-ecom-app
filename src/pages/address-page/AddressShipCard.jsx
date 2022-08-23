import React, { useState } from "react";
import axios from "axios";
import EditModal from "../modal/EditModal";
import { useProduct } from "../../product-context";
import ConfirmationModal from "../modal/ConfirmationModal";
export default function AddressShipCard({ adr, setDisplayAddrID }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <>
      <div
        className="card card-dismiss card-for-modal shipping-radio"
        key={adr._id}
      >
        <input
          className="address-radio"
          name="address"
          type="radio"
          value={adr._id}
          onChange={(e) => {
            setDisplayAddrID(e.target.value);
          }}
        />

        <div className="without-radio">
          <div className="card-content">
            <h4 className="card-title">{adr.name}</h4>

            <div className="card-desc">
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
          <div className="card-footer btn-address-parent">
            <div className="card-btn btn-address">
              <button
                className="btn btn-primary btn-edit"
                onClick={() => setShowEditModal(true)}
              >
                Edit
              </button>
              <button
                className="btn outline-primary btn-delete"
                // onClick={() => deleteAddressHandle(adr)}
                onClick={() => setShowConfirmationModal(true)}
              >
                Delete
              </button>
            </div>
            <div className="card-link"></div>
          </div>
        </div>
      </div>

      {showEditModal && <EditModal setShowModal={setShowEditModal} adr={adr} />}
      {showConfirmationModal && (
        <ConfirmationModal
          setShowConfirmationModal={setShowConfirmationModal}
          adr={adr}
        />
      )}
    </>
  );
}
