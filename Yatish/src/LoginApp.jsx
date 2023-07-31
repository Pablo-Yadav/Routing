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

let navigate=useNavigate();

const handleLoginClick = () => {

    axios
      .post(baseURL+'login', {},{
        headers:user
      })
      .then((response) => {
        //   setPost(response.data);
        console.log("succesful", response.data)
        console.log("User", user);
        navigate("/loginpage");

        // getData();

      });

  };
function handleChange(e,key){
   let newUser={...user};
   newUser[key]=e.target.value;
   setUser(newUser);
}


console.log(user);
  return (
        <>
        <LoginForm
          handleLoginClick={handleLoginClick}
          handleChange={handleChange}
           value={user}
           name="login"
        />
        <br/>
        
        </>
        

  );
}

export default App
