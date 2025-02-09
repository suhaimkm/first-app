import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostSearch = () => {
    interface Post {
        id: number;
        title: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

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
    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="container">
            <h2 className="mb-4 text-center">🔍Post search</h2>
            <input type="text"
                name="search"
                id="search"
                value={searchTerm}
                className="form-control mb-4"
                placeholder="🔍Search post"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="row">
                {filteredPosts.map((post) => (
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

export default PostSearch;