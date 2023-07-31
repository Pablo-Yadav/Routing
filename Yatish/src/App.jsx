import { Routes, Route, Link,NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginApp from "./LoginApp"
import SignUpApp  from "./SignUpApp"
import Courses from './Courses';
import LoginPage from './Login/loginPage';
import ErrorPage from './ErrorPage/Errorpage';

function Navigation(){
    return (
        <div
          style={{marginBottom:"10px"}}
        >
          <NavLink to="/login"
          
          style={({isActive,isPending})=>{
            return{
              color: isActive?"red":"black"
            };
          }}
          
          >Login</NavLink>
            
          <span>    </span>  
          <NavLink to="/signup"
             style={({isActive,isPending})=>{
                return{
                  color: isActive?"red":"black"
                };
            }}
          >SignUp</NavLink>
          <span>    </span>
          <NavLink to="/courses"
           style={({isActive,isPending})=>{
            return{
              color: isActive?"red":"black"
            };
      }}
          >Courses</NavLink>
        </div>
      );
}

export default function App(){
    return (
        <>
    
         <Navigation />
    
          <Routes >
            <Route path="/" element={<div>
               Home Page
            </div>}
            />
            <Route path="login" element={<LoginApp/>} />
            <Route path="signup" element={<SignUpApp />} />
            <Route path="courses" element={<Courses/>} />
            <Route path="loginpage" element={<LoginPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>

        </>
      );
}

