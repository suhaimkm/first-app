import { useState } from 'react'

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

function App() {
  const [count, setCount] = useState(0)
 
 

  

  return (
    <div id = 'app'>
    <UserStatus />
    
    </div>
    
      
     
  )
}

export default App
