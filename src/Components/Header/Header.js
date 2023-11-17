import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src="https://etimg.etb2bimg.com/photo/94049186.cms" alt="pic" />
        </div>
        <div className="login">
          <button>Login / Sign up</button>
        </div>
      </div>
    </div>
  );
}
