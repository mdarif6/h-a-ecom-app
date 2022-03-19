import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="ha-login-gtr">
      <div className="ha-login-window">
        <div className="h-login-container">
          <h2>Login</h2>
          <form action="inputs">
            <div className="h-input-text">
              <label>Email address</label>
              <input type="text" placeholder="xyz@email.com" />
            </div>

            <div className="h-input-text">
              <label>Password</label>
              <input type="password" placeholder="***************" />
            </div>
            <div className="login-check">
              <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value="remember"
                />
                <label for="consent">Remember me</label>
              </div>
              <div>
                <a href="#">Forgot Your Password ?</a>
              </div>
            </div>
            <a href="#">
              <button className="btn btn-primary">Login</button>
            </a>
            <div className="login-bottom-text">
              <Link to="/signup">
                Create New Account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
