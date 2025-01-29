function CoursesList() {
    const courses = [ 
        { id : 1,
        title : "advanced web design",
        duration: "1 hours",
    },
        { id : 2,
       title : "python",
        duration: "2 hours",
    },
        { id : 3,
       title : "java",
        duration: "3 hours",
    }
     ];
    return (
        <div className="container mt-5">
            <h1 className="text-danger">Course List</h1>
            <ul className="list-group">
                {courses.map((course) => (
                    <li className="list-group-item " key={course.id} >title :{course.title} <br /><span className = "small">Duration :{course.duration}</span></li>
                ))}
            </ul>
        </div>
    )
}
export default CoursesList;