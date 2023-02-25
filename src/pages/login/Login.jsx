import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="box">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            type="email"
            className="loginInput"
            placeholder="Enter your email- nikita123@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password...."
          />
          <button className="loginButton">Login</button>
        </form>
      </div>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
