import { useState, useEffect } from "react";

import axios from "axios";




const coursesURL = "http://localhost:3007/admin/courses";




function Courses() {

  const [token, setToken] = useState([]);
  const [res, setRes] = useState(null);
  useEffect(() => {
    const tokenReceived = JSON.parse(localStorage.getItem("token"));
    if (tokenReceived) {
      setToken(tokenReceived);
    }
  }, []);
  console.log("token", token);

  function handleCourses() {
    axios
      .post(coursesURL, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log("Courses Response: ", res.data);
        setRes(res.data);
      });

  }

  return (

    <>

      <button

        className="login-btn-wrapper"
        onClick={() => {
          handleCourses();
        }}

      >
        <span className="login-text">Get Courses</span>
      </button>

      {res && (

        <>

          <p>{`Message: ${res?.message}`}</p>

          <p>{`CourseID: ${res?.courseId}`}</p>

        </>

      )}

    </>
    
  );

}




export default Courses;