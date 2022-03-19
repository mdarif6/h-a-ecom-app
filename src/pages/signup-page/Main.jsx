import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="ha-login-gtr">
      <div className="ha-login-window">
        <div className="h-login-container">
          <h2>Signup</h2>
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
