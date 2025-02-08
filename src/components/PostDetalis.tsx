import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
interface Post {
    id: number;
    title: string;
    body: string;
};


const PostDetails = () => {

    const [post, setPost] = useState<Post | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();

    const fetchPosts = async () => {

        const response = await fetch(`https://dummyjson.com/posts/${id}`);

        if (!response.ok) {
            setError("An error occurred while fetching posts");
        } else {
            const data = await response.json();
            setPost(data);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [id]);

    if (error !== null) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center d-flex align-items-center justify-content-center" role="alert">
                    <div className="spinner-border text-danger me-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    {error}
                </div>
            </div>
        );
    }

    if (post === null) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Post Details</h2>
            <p><strong>Title:</strong> {post.title}</p>
            <p><strong>Body:</strong> {post.body}</p>
            <p><strong>ID:</strong> {post.id}</p>
            <Link to="/" className="btn btn-primary">Back to Posts</Link>
        </div>
    );
};

export default PostDetails;
