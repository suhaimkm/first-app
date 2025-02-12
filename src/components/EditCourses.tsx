import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";




function EditCourses() {
    const API_URL = "https://67a97da26e9548e44fc3c52e.mockapi.io/courses";
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");

    const fetchCourse = async () => {

        const response = await fetch(`https://67a97da26e9548e44fc3c52e.mockapi.io/courses/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setDuration(data.duration);
        setFees(data.fees);
        setImage(data.image);

    };

    useEffect(() => {
        fetchCourse();
    }, [id]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid()) {
            editCourse();
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
        return validForm;
    }

    const editCourse = async () => {
        let requestBody = { title, description, duration, fees, image };
        let requestBodyJson = JSON.stringify(requestBody);

        const request = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBodyJson,
        };

        const response = await fetch(`${API_URL}/${id}`, request);
        if (response.ok) {
            console.log("course added successfully");
            const data = await response.json();
            console.log(data);
            setTitle("");
            setDescription("");
            setDuration("");
            setFees("");
            setImage("");
            setMessage("Course updated successfully");
            setTimeout(() => navigate("/courses"), 2000);
                
            

        }
    };

    return (
        <div>
            {message && <div className="alert alert-success">{message}</div>}
            <h1>Edit Courses</h1>
            <form className="form-group mt-5 border p-5 shadow-lg rounded" onSubmit={handleSubmit}>
                <label htmlFor="titletextbox" className="text-secondary mb-3">TITLE</label>
                <input type="text"
                    name="title"
                    id="title"
                    value={title}
                    className="form-control mb-4"
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
                    onChange={(e) => setDescription(e.target.value)}
                />
                {descriptionError ? (
                    <p className="text-danger small"> {descriptionError} </p>
                ) : (
                    <p></p>
                )}
                <label htmlFor="durationtextbox" className="text-secondary mb-3">DURATION</label>
                <input type="text"
                    name="duration"
                    id="duration"
                    value={duration}
                    className="form-control mb-4"
                    onChange={(e) => setDuration(e.target.value)}
                />
                <label htmlFor="feestextbox" className="text-secondary mb-3">FEES</label>
                <input type="text"
                    name="fees"
                    id="fees"
                    value={fees}
                    className="form-control mb-4"
                    onChange={(e) => setFees(e.target.value)}
                />
                <label htmlFor="imagetextbox" className="text-secondary mb-3">IMAGE</label>
                <input type="text"
                    name="image"
                    id="image"
                    value={image}
                    className="form-control mb-4"

                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">update</button>
                <Link to="/courses" className="btn btn-secondary ms-2">Cancel</Link>
            </form>
        </div>)

}

export default EditCourses;
