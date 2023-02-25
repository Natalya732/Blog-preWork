import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i class=" topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
        <Link to="/setting">
          <i class="topSearchIcon fa fa-cog"></i>
        </Link>
      </div>
    </div>
  );
}
