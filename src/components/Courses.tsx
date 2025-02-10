import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
    const API_URL = "https://67a97da26e9548e44fc3c52e.mockapi.io/courses";
    const [courses, setCourses] = useState<Course[]>([]);
    interface Course {
        id: number;
        title: string;
        description: string;
       
    }


    const fetchCourses = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCourses(data);
    }
    useEffect(() => {
        fetchCourses();
    });



    return (
        <div>
            <h1>course list</h1>
            <Link className="btn btn-success btn-lg me-2" to="/add-courses"> ➕ Add courses</Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DESCRIPTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.title}</td>
                                <td>{course.description}</td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </div>
    );
    
}
export default Courses;