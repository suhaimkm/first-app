function CoursesList() {
    const courses = ["advanced web design", "python", "java", "c++", "c#", "javascript", "react", "angular", "vue", "svelte", "nodejs", "express", "mongodb", "sql", "mysql"];
    return (
        <div className="container mt-5">
            <h1 className="text-danger">Course List</h1>
            <ul className="list-group">
                {courses.map((course) => (
                    <li className="list-group-item list-group-item-action">{course}</li>
                ))}
            </ul>
        </div>
    )
}
export default CoursesList;