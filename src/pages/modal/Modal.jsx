import "./Modal.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../features/productSlice";

export default function Modal({ setShowModal }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [pincode, setPincode] = useState(0);
  const [area, setArea] = useState("");
  const [flatno, setFlatno] = useState(0);
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const dispatchRedux = useDispatch();

  function modalCloseHandle() {
    setShowModal(false);
  }
  async function saveClickHandler(e) {
    e.preventDefault();
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/address",
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

      if (response.status === 201) {
        dispatchRedux(addAddress(response.data.address));

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
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="number"
                placeholder="Mobile"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="number"
                placeholder="Pin Code"
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Locality/Area/Street"
                required
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Flat number/ Building Name"
                required
                onChange={(e) => setFlatno(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="Landmark"
                required
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="District/City"
                required
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div>
              <input
                className="ha-address-input"
                type="text"
                placeholder="State"
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
