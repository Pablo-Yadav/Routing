import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Register from './Register.jsx'
import Courses from './Courses.jsx'
import CourseID from './CourseID.jsx'
import Errorpage from './Errorpage.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="login" element={<Login />}/>
          <Route path=":username" element={<Home />}/>
          <Route path="signup" element={<Register />}/>
          <Route path="courses" element={<Courses />}/>
          <Route path="courseID/:courseid" element={<CourseID />}/>
          <Route path="*" element={<Errorpage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
