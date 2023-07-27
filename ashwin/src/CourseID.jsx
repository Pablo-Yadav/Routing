import { useParams } from "react-router-dom"
export default function CourseID()
{
    const {courseid} = useParams();
    return (
        <>
        <h1>Course {courseid}</h1>
        </>
    )
}