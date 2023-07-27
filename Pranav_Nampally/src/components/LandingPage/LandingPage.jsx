import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./LandingPage.css";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const UserContext = createContext();
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState([]);

  useEffect(() => {
    const tokenReceived = JSON.parse(localStorage.getItem("token"));
    console.log("token", tokenReceived);
    if (tokenReceived) {
      setToken(tokenReceived);
      setLogged(!logged);
    } else {
      navigate("/unauth");
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setLogged(!logged);
    window.location.reload(true);
  }

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          // justifySelf: "flex-end",
          width: "96vw",
          position: "fixed",
          top: "0",
          padding: "2vw",
          backgroundColor: "white",
          zIndex: "5",
        }}
      >
        {/* <Link to="/">Home</Link> */}
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Home
        </NavLink>

        {/* <Link to="/login">Login</Link> */}
        <NavLink
          to="/login"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Login
        </NavLink>

        {/* <Link to="/signup">Sign Up</Link> */}
        <NavLink
          to="/signup"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Sign Up
        </NavLink>

        {/* <Link to="/courses">Courses</Link> */}
        <NavLink
          to="/courses"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Courses
        </NavLink>

        {logged && (
          <UserContext.Provider value={logged}>
            <button
              className="login-sm-btn-wrapper"
              onClick={() => {
                handleLogout();
              }}
            >
              <span className="login-sm-text">Logout</span>
            </button>
          </UserContext.Provider>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default LandingPage;
