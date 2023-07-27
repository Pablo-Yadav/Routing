import * as React from 'react';
import axios from 'axios';
import './App.css';

export default function Courses()
{
    const baseURL = "http://localhost:3002/admin/courses";
    const [token, setToken] = React.useState([]);
    const [res, setRes] = React.useState(null);

    React.useEffect(() => {
        const tokenReceived = JSON.parse(localStorage.getItem("token"));
        if(tokenReceived)
        setToken(tokenReceived);
    }, []);
    
    console.log("token: ", token);

    function handleCourses()
    {
        axios
        .post(baseURL, {}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            console.log("Courses: ", res.data);
            setRes(res.data);
        })
    }

    return (
        <>
        <div>
        <button className='login' onClick={() => handleCourses()}>Get Courses</button>

        {res && (
            <>
            <p>{`Message: ${res?.message}`}</p>
            <p>{`CourseID: ${res?.courseId}`}</p>
            </>
        )}
        </div>
        </>
    )
}