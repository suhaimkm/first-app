interface Course {
    id: number;
    title: string;
    duration: string;
}

interface CourseProp {
    courses: Course[];
}

function CoursesList2 (props: CourseProp) {
   
    return (
        <div className="container mt-5">
            <h1 className="text-danger">Course List</h1>
            <ul className="list-group">
                {props.courses.map((course) => (
                    <li className="list-group-item " key={course.id} >title :{course.title} <br /><span className="small">Duration :{course.duration}</span></li>
                ))}
            </ul>
        </div>
    )
}
export default CoursesList2;