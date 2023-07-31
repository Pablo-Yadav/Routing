import * as React from 'react';
import {NavLink, useNavigate,Outlet} from 'react-router-dom';

export default function Dashboard()
{
    const navigate = useNavigate();
    function handleButtonClick(name)
    {
      navigate(`/${name}`);
    }
    return (
        <>
                  <nav className='banner'>
        <NavLink to="/login" style={({ isActive, isPending }) => {
          return {
          fontWeight: isActive ? "bold" : "",
          paddingRight: "15px",
          fontSize: "large",
          color: isActive ? "blue" : "black",
          textDecoration: isActive? "underline" : "none"};
        }}>Login</NavLink>
        <NavLink to="/signup" style={({ isActive, isPending }) => {
          return {
          fontWeight: isActive ? "bold" : "",
          paddingRight: "15px",
          fontSize: "large",
          color: isActive ? "blue" : "black",
          textDecoration: isActive? "underline" : "none"};
        }}>SignUp</NavLink>
        <NavLink to="/courses" style={({ isActive, isPending }) => {
          return {
          fontWeight: isActive ? "bold" : "",
          paddingRight: "15px",
          fontSize: "large",
          color: isActive ? "blue" : "black",
          textDecoration: isActive? "underline" : "none"};
        }}>Courses</NavLink>
      </nav>

      <button onClick={() => handleButtonClick("login")}>Login</button>
      <button onClick={() => handleButtonClick("signup")}>SignUp</button>
      <button onClick={() => handleButtonClick("courses")}>Courses</button>
      <Outlet/>
        </>
    )
}