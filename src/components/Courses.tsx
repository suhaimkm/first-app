import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
    const API_URL = "https://67a97da26e9548e44fc3c52e.mockapi.io/courses";
    const [courses, setCourses] = useState<Course[]>([]);

    interface Course {
        id: number;
        title: string;
        description: string;
        duration: string;
        fees: number;
        image: string;
    }

    const deleteCourse = async (id: number) => {
        const request = {
            method: "DELETE",
        };
        const response = await fetch(`${API_URL}/${id}`, request);
        const data = await response.json();
        console.log(data);

        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
    };

    const fetchCourses = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCourses(data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Course List</h1>
            <Link className="btn btn-success btn-lg me-2" to="/add-courses"> ➕ Add courses</Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">DURATION</th>
                        <th scope="col">FEES</th>
                        <th scope="col">IMAGE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.duration}</td>
                            <td>{course.fees}</td>
                            <td><img className="img-thumbnail" src={course.image} alt="course" style={{ width:"100px", height:"100px" }}/></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>❌Delete</button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Courses;