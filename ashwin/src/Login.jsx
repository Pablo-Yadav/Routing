import * as React from 'react';
import axios from "axios";
import './App.css';
import {useNavigate, useParams} from 'react-router-dom';

export default function Login()
{
  const [user, setUser] = React.useState({});
  const baseURL = "http://localhost:3002/admin/login";
  const navigate = useNavigate();
  const params = useParams();
  
  function login(){
    const headers = {
      'Content-Type': 'application/json',
      'username': user.username,
      'password': user.password,
    }
    axios.post(baseURL, {}, {
      headers: headers
    })
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
    params.username = user.username;
    navigate(`/${user.username}`);
  }
  
  function handleUpdate(e,user,setUser,name)
  {
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
          <div className='loginform'>Login Form</div>
          <input type="text" className='rectangle2' placeholder='Enter Username' name="username" value={user?.username} onChange={(e) => handleUpdate(e,user,setUser,"username")}/>
          <input type="text" className='rectangle1' placeholder='Enter Password' name="password" value={user?.password} onChange={(e) => handleUpdate(e,user,setUser,"password")}/>
          <button className='login' onClick={() => login()}>Login</button>
          <div className='donthave'>Don’t have an account? <a href="http://localhost:5174/signup">Register</a></div>
        </div>
      </div>
    </div>
    </>
  )
}