import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const coursesURL = "http://localhost:3000/admin/courses";

function Courses() {
  const [token, setToken] = useState([]);
  const [res, setRes] = useState(null);
  const [getRes, setGetRes] = useState(null);
  const navigate = useNavigate();
  const [params, setParams] = useState();

  useEffect(() => {
    const tokenReceived = JSON.parse(localStorage.getItem("token"));
    // console.log(tokenReceived);
    if (tokenReceived) {
      setToken(tokenReceived);
    } else {
      navigate("/unauth");
    }
  }, []);

  console.log("token", token);

  function handlePostCourses() {
    axios
      .post(coursesURL, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log("Courses Response: ", res.data);
        setRes(res.data);
      });
  }

  function handleGetCourses() {
    axios
      .get(coursesURL, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log("Courses Response: ", res.data);
        setGetRes(res.data);
      });
  }

  function handleGoToLogin() {
    navigate("/login");
  }

  function handleCourseID() {}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10vw",
      }}
    >
      <button
        className="login-btn-wrapper"
        onClick={() => {
          handlePostCourses();
        }}
      >
        <span className="login-text">Post Courses</span>
      </button>
      <br />
      <button
        className="login-btn-wrapper"
        onClick={() => {
          handleGetCourses();
        }}
      >
        <span className="login-text">Get Courses</span>
      </button>
      <br />
      <button
        className="login-btn-wrapper"
        onClick={() => {
          handleGoToLogin();
        }}
      >
        <span className="login-text">Go to Login</span>
      </button>
      <br />
      <input
        className="input-field"
        placeholder="Enter CourseID"
        name="courseId"
        // style={{ marginTop: "3vh" }}
        onChange={(e) => {
          setParams(e.target.value);
        }}
      ></input>
      <br />
      <button
        className="login-btn-wrapper"
        onClick={() => {
          navigate(`./${params}`);
        }}
      >
        <span className="login-text">Send Params</span>
      </button>

      {res && (
        <>
          <p>
            ----------------------------------------Post
            Response-----------------------------------------
          </p>
          <p>{`Message: ${res?.message}`}</p>
          <p>{`CourseID: ${res?.courseId}`}</p>
        </>
      )}

      {getRes && (
        <>
          <p>
            ----------------------------------------Get
            Response-----------------------------------------
          </p>
          <p>{`No. of Courses: ${getRes?.courses.length}`}</p>
          {/* <p>{`CourseID: ${res?.courseId}`}</p> */}
          <p>Courses:</p>
          {getRes?.courses.map((item, idx) => {
            return (
              <>
                {item.id}
                <br />
              </>
            );
          })}
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Courses;
