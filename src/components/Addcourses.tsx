import React, { useState } from "react";

function Addcourses() {
    const API_URL = "https://67a97da26e9548e44fc3c52e.mockapi.io/courses";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault();
        adduser();
    };

    const adduser = async () => {
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
        if (!response.ok) {
            console.log("course added successfully");
            const data = await response.json();
            console.log(data);
        }
    };      

    return (
      <div>
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
                <label htmlFor="descriptiontextbox" className="text-secondary mb-3">DESCRIPTION</label>
            <input type="text"
                name="description"
                    id="description"
                value={description}
                className="form-control mb-4"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
            </div>)
            
}export default Addcourses;