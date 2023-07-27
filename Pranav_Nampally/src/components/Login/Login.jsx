import { useState } from "react";
import axios from "axios";
import "./Login.css";

const loginURL = "http://localhost:3000/admin/login";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const headers = {
    "Content-Type": "application/json",
    username: credentials.username,
    password: credentials.password,
  };
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    axios
      .post(
        loginURL,
        {},
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log("Login Response: ", res.data.message);
      })
      .catch((error) => {
        console.log("Login Error: ", error.message);
      });
  }
  return (
    <>
      <div className="login">
        <p className="login-heading">Login Form</p>
        <input
          className="input-field"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => {
            handleInput(e);
          }}
        ></input>
        <input
          className="input-field"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => {
            handleInput(e);
          }}
        ></input>
        <button
          className="login-btn-wrapper"
          onClick={() => {
            console.log(credentials);
            handleLogin();
          }}
        >
          <span className="login-text">Login</span>
        </button>
        <p className="register">
          Don’t have an account? <a>SignUp</a>
        </p>
      </div>
    </>
  );
}

export default Login;
