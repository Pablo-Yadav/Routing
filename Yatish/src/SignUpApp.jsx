import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './Login/login';
import SignUpForm from './SignUp/signup';
import axios from "axios"
import {useNavigate} from "react-router-dom"


const baseURL="http://localhost:3007/admin/";
let initialObj={
  "username":"",
      "password":""
};
function App() {
  let[user,setUser]=useState(
    initialObj
);
let [isLoggedIn,setIsLoggedIn]=useState(false);
let [isSignedUp,setIsSignedUp]=useState(false);
let navigate=useNavigate();


function handleChange(e,key){
   let newUser={...user};
   newUser[key]=e.target.value;
   setUser(newUser);
}

function handleSignupClick(){
  axios.post(baseURL+"signup", user)
  .then((response) => {
    console.log(response);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    console.log("Token is",response.data.token);
    setUser({...initialObj});
    navigate("/login");
   
  });
}


console.log(user);
  return (
        <>
       
        <SignUpForm
           handleChange={handleChange}
           value={user}
           name="signup"
           handleSignupClick={handleSignupClick}
        
        />
        </>
        

  );
}

export default App
