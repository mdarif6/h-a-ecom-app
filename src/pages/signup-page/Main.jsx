import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import {
  settingAuthentication,
  addingUserInformation,
} from "../../features/authSlice";

export default function Main() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatchRedux = useDispatch();
  const navigate = useNavigate();

  async function formSubmitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", register);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        localStorage.setItem("firstname", response.data.createdUser.name);
        localStorage.setItem("email", response.data.createdUser.email);
        navigate("/");
        dispatchRedux(settingAuthentication(true));

        dispatchRedux(addingUserInformation(response.data.createdUser));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="ha-login-gtr">
      <div className="ha-login-window">
        <div className="h-login-container">
          <h2>Signup</h2>
          <form action="inputs" onSubmit={formSubmitHandler}>
            <div className="h-input-text">
              <label>Name</label>
              <input
                type="text"
                placeholder="xyz"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
              />
            </div>

            <div className="h-input-text">
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
            </div>

            <div className="h-input-text">
              <label>Password</label>
              <input
                type="password"
                placeholder="***************"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, password: e.target.value };
                  })
                }
              />
            </div>

            <button
              className={
                register.name === "" ||
                register.email === "" ||
                register.password === ""
                  ? "btn btn-primary disabled-btn"
                  : "btn btn-primary"
              }
              disabled={
                register.name === "" ||
                register.email === "" ||
                register.password === ""
              }
            >
              Create New Account
            </button>
            <div className="login-bottom-text">
              <Link to="/login">
                Already have an account
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
