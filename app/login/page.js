import React from "react";
import "./login.css";
import Header from "../components/Header/Header";

function login(props) {
  return (
    <>
      <Header />
      <h1>CONNECTION / INSCRIPTION</h1>
      <form
        className="login-form"
        action=""
        id="loginForm"
        name="loginForm"
        method="POST"
      >
        <label htmlFor="email">
          E-MAIL
          <input id="email" type="text" />
        </label>
        <label htmlFor="password">
          PASSWORD
          <input id="password" type="text" />
        </label>
        <div className="signup-login">
          <button>INSCRIPTION</button> <button>CONNECTION</button>
        </div>
      </form>
    </>
  );
}

export default login;
