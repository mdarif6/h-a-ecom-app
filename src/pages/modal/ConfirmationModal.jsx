import React from "react";
import axios from "axios";
import "./Modal.css";

import { useDispatch } from "react-redux";
import { addAddress } from "../../features/productSlice";

export default function ConfirmationModal({ setShowConfirmationModal, adr }) {
  const dispatchRedux = useDispatch();

  function closeConfirmationModal() {
    setShowConfirmationModal(false);
  }
  async function deleteAddressHandle() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/user/address/${adr._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatchRedux(addAddress(response.data.address));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ha-confirmation-modal-position">
      <div className="ha-confirmation-modal-view">
        <h3>Are you sure you want to delete?</h3>
        <div style={{ display: "flex", alignitems: "center", color: "white" }}>
          <button
            className="btn btn-primary-cancel"
            onClick={closeConfirmationModal}
          >
            Cancel
          </button>
          <button
            className="btn outline-primary-confirm"
            onClick={deleteAddressHandle}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
