import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
    interface Post {
        id: number;
        title: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
            setError("An error occurred while fetching posts");
        } else {
            const data = await response.json();
            console.log(data); 
            setPosts(data.posts);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []); 

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

    return (
        <div className="container">
            <h2 className="mb-4 text-center">Post List</h2>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <Link to={`/posts/${post.id}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;