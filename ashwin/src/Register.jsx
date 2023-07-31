import * as React from 'react';
import axios from "axios";
import './App.css';
import {useNavigate} from 'react-router-dom';

const baseURL = "http://localhost:3002/admin/signup";

export default function Register()
{
  const [user, setUser] = React.useState({username: "", password: ""});
  const [post, setPost] = React.useState(null);
  const navigate = useNavigate();

  function updatePost(user,setPost){
        axios
        .post(baseURL, {
            username: user.username,
            password: user.password
        })
        .then((response) => {
            console.log("Signup successfully");
            localStorage.setItem("token", JSON.stringify(response.data.token));
            console.log("Token is",response.data.token);
            setPost(response.data);
        });
        navigate('/login');
        alert("Signed Up successfully. Please Login");
    }

function handleUpdate(e,user,setUser,name){
  let temp = user;
  temp[name] = e.target.value;
  setUser(temp);
  console.log("Update: ",temp);
}

  return (
    <>
    <div className='group4'>
      <div className='group2'>
        <div className='logbox'>
          <div className='loginform'>Registration Form</div>
          <input type="text" className='rectangle2' placeholder='Enter Username' name="username" onChange={(e) => handleUpdate(e,user,setUser,"username")}/>
          <input type="text" className='rectangle1' placeholder='Enter Password' name="password" onChange={(e) => handleUpdate(e,user,setUser,"password")}/>
          <button className='login' onClick={() => updatePost(user,setPost)}>SignUp</button>
        </div>
      </div>
    </div>
    </>
  )
}