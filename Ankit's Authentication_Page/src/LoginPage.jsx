import React from "react";
import axios from "axios";
import './App.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost:3000/admin/login";
  
  const handlePost = () => {
    axios
      .post(baseURL, {},{
        headers:{
            "username": userName,
            "password": password
        }
      })
      .then((response) => {
        //   setPost(response.data);
        console.log("succesful", response.data)
        console.log("UserName", userName);
        console.log("password",password);
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
        <h1> Login Form</h1>
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
            Login
          </button>
        </div>

        <h3>Don’t have an account? <NavLink
        to="/signup"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
          };
        }}
      >
        Register
      </NavLink> </h3> 
      </div>
    </>
  );
}
