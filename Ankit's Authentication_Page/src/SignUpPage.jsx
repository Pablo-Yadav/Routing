import React from "react";
import axios from "axios";
import './App.css'
import { useState } from "react";
export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost:3000/admin/signup";
//   useEffect(() => {
    
//   }, [items]);
  const handlePost = () => {
    axios
      .post(baseURL, {"username": userName,
      "password": password})
      .then((response) => {
        //   setPost(response.data);
        console.log("succesful", response.data)
        console.log("UserName", userName);
        console.log("password",password);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        // getData();
      });
  };

//   function getData() {
//     axios.get(baseURL).then((response) => {
//       // console.log("responnse",response.data)
//       setUserName(response.data);
//       setPassword(response.data);
//     });
//   }

  return (
    <>
      <div className="box">
        <h1> SignUp Form</h1>
        <div className="userName">
          <input
            className="userName"
            placeholder="Enter Email Id"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <input
            className="password"
            placeholder="Enter Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={() => {
                handlePost();
            }}
          >
            SignUp
          </button>
        </div>

        {/* <h3>Don’t have an account? Register </h3> */}
      </div>
    </>
  );
}
