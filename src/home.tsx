import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <h1>Home</h1>
            {/* <Link className="btn btn-danger btn-lg me-2" to="/postsearch"> PostSearch</Link> */}
            <Link className="btn btn-danger btn-lg me-2" to="/productlistsearch"> ProductListSearch</Link>
            <p>Welcome to the Home page</p>
        </main>
    )
}
export default Home;
