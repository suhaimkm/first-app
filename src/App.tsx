import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import './App.css'
import AboutUs from './components/AboutUs'
import LoginStatus from './components/assignment'
import Carslist from './components/Cars'
import Cars from './components/Cars'

import CoursesList from './components/CoursesList'
import ProductList from './components/product'
import Vechiles from './components/Vehicles'
import CoursesList2 from './components/CoursesList2'
import ProductList2 from './components/ProductList2'
import Carslist2 from './components/CarsList2'
import fetchproducts from './services/ProductList2services'
import getCars from './services/CarsServices'
import getCourses from './services/CourseServices'
import getTrucks, { getBikes } from './services/vechiles'
import Count from './components/count'
import On from './components/offon'
import Name from './components/name'
import UserStatus from './components/UserStatus'
import Bulb from './components/bulb'
import Greeting from './components/Greeting'
import Article from './components/airticle'
import ArticleList from './AirtcleList'
import getArticles from './services/AirtcleServices'
import UserList from './components/UserList'
import ProductList3 from './components/ProductList3'
import RecipeList from './components/RecipeList'
import PostList from './components/PostList'
import PostDetails from './components/PostDetalis'
import ProductList4 from './components/ProductList4'
import ProductDetails from './components/ProductDetails'
import Home from './home'
import PostSearch from './components/PostSearch'
import ProductListSearch from './components/ProductListSearch'
import Courses from './components/Courses'
import Addcourses from './components/Addcourses'



function App() {
  const [count, setCount] = useState(0)





  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">React</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productList4">Products2</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="add-courses" element={<Addcourses />} />
        <Route path="/products" element={<ProductList3 />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/productList4" element={<ProductList4 />} />
        <Route path="/postdetails" element={<PostDetails />} />
        <Route path="/postsearch" element={<PostSearch />} />
        <Route path="/productlistsearch" element={<ProductListSearch />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/productList4/:id" element={<ProductDetails />} />

        






      </Routes>
    </Router>








  );
}

export default App
