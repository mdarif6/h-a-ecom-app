import "./Modal.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useProduct } from "../../product-context";

export default function EditModal({ setShowModal, adr }) {
  const { dispatch } = useProduct();
  const [name, setName] = useState(adr.name);
  const [mobile, setMobile] = useState(adr.mobile);
  const [pincode, setPincode] = useState(adr.pincode);
  const [area, setArea] = useState(adr.area);
  const [flatno, setFlatno] = useState(adr.flatno);
  const [landmark, setLandmark] = useState(adr.landmark);
  const [district, setDistrict] = useState(adr.district);
  const [state, setState] = useState(adr.state);

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
              <i className="fas fa-times" onClick={modalCloseHandle}></i>
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="number"
                placeholder="Mobile"
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="number"
                placeholder="Pin Code"
                value={pincode}
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Locality/Area/Street"
                value={area}
                required
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Flat number/ Building Name"
                value={flatno}
                required
                onChange={(e) => setFlatno(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Landmark"
                value={landmark}
                required
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="District/City"
                value={district}
                required
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="State"
                value={state}
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="ha-address-bottom-btns">
            <button className="btn btn-primary btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
