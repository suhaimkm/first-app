import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <h1>Home</h1>
            <Link className="btn btn-danger btn-lg me-2" to="/postsearch"> search</Link>
            <p>Welcome to the Home page</p>
        </main>
    )
}
export default Home;
