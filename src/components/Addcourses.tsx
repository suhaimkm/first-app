import React, { useState } from "react";

function Addcourses() {
    const API_URL = "https://67a97da26e9548e44fc3c52e.mockapi.io/courses";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    // const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault();

        
        if (isFormValid()) {
            addCourse();
            setMessage("");
        } else {
            setMessage("Please fix the validation errors");
        }
    };

    const isFormValid = () => {
        let validForm: boolean = true;
        
        if (title.trim().length === 0) {
            setTitleError("Title is required");
            validForm = false;
        } else {
            setTitleError("");
        }
        if (description.trim().length === 0) {
            setDescriptionError("Description is required");
            validForm = false;
        } else {
            setDescriptionError("");
        }
            
        

        const addCourse = async () => {
            let requestBody = { title, description };
            let requestBodyJson = JSON.stringify(requestBody);

            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBodyJson,
            };

            const response = await fetch(API_URL, request);
            if (response.ok) {
                console.log("course added successfully");
                const data = await response.json();
                console.log(data);
                setTitle("");
                setDescription("");
                setMessage("Course added successfully");

            }
        };

        return (
            <div>
                {message && <div className="alert alert-success">{message}</div>}
                <h1>Add Courses</h1>
                <form className="form-group mt-5 border p-5 shadow-lg rounded" onSubmit={handleSubmit}>
                    <label htmlFor="titletextbox" className="text-secondary mb-3">TITLE</label>
                    <input type="text"
                        name="title"
                        id="title"
                        value={title}
                        className="form-control mb-4"
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError ? (
                        <p className="text-danger small"> {titleError} </p>
                    ) : (
                        <p></p>
                    )}
                    <label htmlFor="descriptiontextbox" className="text-secondary mb-3">DESCRIPTION</label>
                    <input type="text"
                        name="description"
                        id="description"
                        value={description}
                        className="form-control mb-4"
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {descriptionError ? (
                        <p className="text-danger small"> {titleError} </p>
                    ) : (
                        <p></p>
                    )}
                    <input type="text"
                        name="duration"
                        id="duration"
                        value={duration}
                        className="form-control mb-4"
                        placeholder="duration"
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <input type="text"
                        name="fees"
                        id="fees"
                        value={fees}
                        className="form-control mb-4"
                        placeholder="fees"
                        onChange={(e) => setFees(e.target.value)}
                    />
                    {/* <input type="text"
                name="image"
                    id="dimage"
                    value={image}
                className="form-control mb-4"
                    placeholder="image"
                    onChange={(e) => setDescription(e.target.value)}
                /> */}
                    <button type="submit" className="btn btn-primary">Add Course</button>
                </form>
            </div>)
            
    }
};
    export default Addcourses;