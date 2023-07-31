import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { Course_details } from "./course_details";
export function Courses() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("token"));
    if (items) {
      setItems(items);
    } else {
      Navigate("/unauth");
    }
  }, []);
  function LoginButton() {
    Navigate("/login");
  }
  function handleCourses() {
    axios
      .post(
        "http://localhost:3000/admin/courses",
        {},
        { headers: { Authorization: `Bearer ${items}` } }
      )
      .then((res) => console.log(res.data));
  }
  console.log(items);

  return (
    <div>
      <button type="submit" onClick={handleCourses}>
        Get Courses
      </button>
      <button type="submit" onClick={LoginButton}>
        Go To Login
      </button>
      <nav>
        <Link to = 'course_details'>Course Details</Link>
      </nav>
     <Outlet/>
    </div>
  );
}
