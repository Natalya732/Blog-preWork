import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="box">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
          />
          <label>Email </label>
          <input
            type="email"
            className="registerInput"
            placeholder="Enter your email- nikita123@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password...."
          />
          <button className="registerButton">Sign Up</button>
        </form>
      </div>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
