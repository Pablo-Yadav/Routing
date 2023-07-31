import { useParams } from "react-router-dom";

export function CourseId(){
    const params = useParams();
    const CourseId = params.CourseId;
    return <h1>Details about Course {CourseId}</h1>
}