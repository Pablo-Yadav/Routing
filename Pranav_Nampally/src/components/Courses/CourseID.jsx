import { useParams } from "react-router";
import { Outlet } from "react-router-dom";

function CourseID() {
  const { courseId } = useParams();
  return (
    <>
      <h1>Course {courseId}</h1>
      <Outlet />
    </>
  );
}

export default CourseID;
