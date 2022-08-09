import axios from "axios";
import React, { useState } from "react";
import { useProduct } from "../../product-context";
import ConfirmationModal from "../modal/ConfirmationModal";
import EditModal from "../modal/EditModal";

export default function AddressCard({ adr }) {
  const { state, dispatch } = useProduct();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  async function deleteAddressHandle() {
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
      <div class="card card-dismiss card-for-modal">
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
              onClick={() => setShowConfirmationModal(true)}
              // onClick={deleteAddressHandle}
            >
              Delete
            </button>
          </div>
          <div class="card-link"></div>
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
