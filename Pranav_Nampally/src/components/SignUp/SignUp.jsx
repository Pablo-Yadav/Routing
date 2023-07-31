import "./SignUp.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signUpURL = "http://localhost:3000/admin/signup";

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  //   const navigate = useNavigate();
  //   const user = useContext(UserContext);

  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSignUp() {
    axios
      .post(signUpURL, credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        console.log("SignUp Response: ", res.data.message);
        window.location.reload(true);
        // navigate("/signup");
      })
      .catch((error) => {
        console.log("SignUp Error: ", error);
      });
  }

  return (
    <>
      <div className="signup">
        <p className="signup-heading">SignUp Form</p>
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
            handleSignUp();
          }}
        >
          <span className="login-text">Sign Up</span>
        </button>
      </div>
    </>
  );
}

export default SignUp;
