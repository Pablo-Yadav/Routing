import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import SignUp from "./SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Courses } from "./courses";
import { Link, NavLink } from "react-router-dom";
import { Course_details } from "./course_details";
import { CourseId } from "./CourseId";
function Navigation() {
  return (
    <>
      {/* <span>   </span>
    <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
> Login Page</NavLink>

<nav id="sidebar">
  <NavLink to="/login" />
</nav> */} 
      <span> </span>
      <NavLink
        to="/courses"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
          };
        }}
      >
        Courses
      </NavLink>
      {/* <button onClick={() => LoginPage.push('/') } >Go to home</button> */}
    </>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="courses" element={<Courses />} >
              <Route path=":CourseId" element={<CourseId/>}/>
              <Route path="course_details" element={<Course_details/>}/>
            </Route>
            <Route path="unauth" element={<h1> Create Account First! </h1>} />
          
          <Route path="*" element = { <h1>404: page not found</h1>} />
          </Route>
        </Routes>
        {/* <Switch> */}
        {/* <Route path="/" exact component={Home} />
      {
      isAuthenticated ? 
      <>
      <Route path="/login"  element={<LoginPage/>} />
      <Route path="/signup"  element={<SignUp/>} />
      </> : <Redirect to="/" />
      }
      
    </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
