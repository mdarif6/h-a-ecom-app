import React, { useState } from "react";
import axios from "axios";
import EditModal from "../modal/EditModal";
import { useProduct } from "../../product-context";
export default function AddressShipCard({ adr, setDisplayAddrID }) {
  const [showEditModal, setShowEditModal] = useState(false);

  async function deleteAddressHandle(adr) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/user/address/${adr._id}`, {
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

  return (
    <>
      <div
        class="card card-dismiss card-for-modal shipping-radio"
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

      {showEditModal && <EditModal setShowModal={setShowEditModal} adr={adr} />}
    </>
  );
}
