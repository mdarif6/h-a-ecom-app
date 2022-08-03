import "./Modal.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useProduct } from "../../product-context";

export default function EditModal({ setShowModal, adr }) {
  const { dispatch } = useProduct();
  const [name, setName] = useState(adr.name);
  const [mobile, setMobile] = useState(0);
  const [pincode, setPincode] = useState(0);
  const [area, setArea] = useState("");
  const [flatno, setFlatno] = useState(0);
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  function modalCloseHandle() {
    setShowModal(false);
  }
  async function saveClickHandler(e) {
    e.preventDefault();
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/user/address/${adr._id}`,
        {
          address: {
            name,
            mobile,
            pincode,
            area,
            flatno,
            landmark,
            district,
            state,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response, "edit ka response");
      if (response.status === 200) {
        dispatch({ type: "ADD_ADDRESS", payload: response.data.address });
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ha-modal-wrapper">
      <div className="ha-modal-form">
        <form onSubmit={saveClickHandler}>
          <div className="ha-address-form">
            <div className="ha-addheading-and-icon">
              <h3>Add new address</h3>
              <i class="fas fa-times" onClick={modalCloseHandle}></i>
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Pin Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Locality/Area/Street"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Flat number/ Building Name"
                value={flatno}
                onChange={(e) => setFlatno(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="District/City"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="ha-address-bottom-btns">
            {/* <button className="btn outline-primary btn-cancel">Cancel</button> */}
            <button className="btn btn-primary btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
