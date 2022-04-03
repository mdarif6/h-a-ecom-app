import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Main() {
  const [register, setRegister] = useState({ email: "", password: "" });

  async function formSubmitHandler(e) {
    e.preventDefault();
    console.log(register);
    try {
      const response = await axios.post("/api/auth/signup", register);
      console.log(response);
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
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) =>
                  // setRegister({ ...register, email: e.target.value })
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
            <div className="login-check">
              <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value="remember"
                />
                <label for="consent">I accept all Terms & Conditions</label>
              </div>
            </div>
            <button className="btn btn-primary">Create New Account</button>
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
