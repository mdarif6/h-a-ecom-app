import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../auth-context";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/products");
        dispatch({ type: "SET_AUTH", payload: true });
        dispatch({ type: "ADD_USERINFO", payload: response.data.foundUser });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loginAsGuest() {
    try {
      const response = await axios.post("api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/");
        dispatch({ type: "SET_AUTH", payload: true });
        dispatch({ type: "ADD_USERINFO", payload: response.data.foundUser });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="ha-login-gtr">
      <div className="ha-login-window">
        <div className="h-login-container">
          <h2>Login</h2>
          <form action="inputs" onSubmit={submitHandler}>
            <div className="h-input-text">
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="h-input-text">
              <label>Password</label>
              <input
                type="password"
                placeholder="***************"
                onChange={(e) => setPassword(e.target.value)}
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
                <label htmlFor="consent">Remember me</label>
              </div>
              <div>
                <a href="#">Forgot Your Password ?</a>
              </div>
            </div>
            <a href="#">
              <button
                className={
                  email === "" || password === ""
                    ? "btn btn-primary disabled-btn"
                    : "btn btn-primary"
                }
                disabled={email === "" || password === ""}
              >
                Login
              </button>
            </a>
          </form>
          <a href="#">
            <button className="btn outline-primary" onClick={loginAsGuest}>
              Login as a guest
            </button>
          </a>
          <div className="login-bottom-text">
            <Link to="/signup">
              Create New Account <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
