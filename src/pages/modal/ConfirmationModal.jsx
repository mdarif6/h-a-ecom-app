import React from "react";
import axios from "axios";
import "./Modal.css";
import { useProduct } from "../../product-context";

export default function ConfirmationModal({ setShowConfirmationModal, adr }) {
  const { state, dispatch } = useProduct();

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
        dispatch({ type: "ADD_ADDRESS", payload: response.data.address });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="ha-confirmation-modal-position"
      //   style={{
      //     position: "fixed",
      //     top: "0",
      //     left: "0",
      //     right: "0",
      //     bottom: "0",
      //     backgroundColor: "rgba(218, 212, 212, 0.5)",
      //   }}
    >
      <div
        className="ha-confirmation-modal-view"
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   position: "absolute",
        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%,-50%)",
        //   background: "white",
        //   padding: "50px",
        //   zIndex: "99",
        // }}
      >
        <h3>are you sure ? want to delete ?</h3>
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
