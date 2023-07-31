import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Courses from "./components/Courses/Courses";
import { NavLink } from "react-router-dom";
import CourseID from "./components/Courses/CourseID";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        >
          <Route index element={<h1>Hello</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<CourseID />} />
          </Route>
          <Route
            path="unauth"
            element={
              <h1>
                You are Unauthorized to Enter this page as you have not logged
                in/ Signed Up
              </h1>
            }
          />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
