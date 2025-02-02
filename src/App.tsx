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

function App() {
  const [count, setCount] = useState(0)
 
 

  

  return (
    <div id = 'app'>
      {/* <Vechiles items={cars} title='list of cars' ></Vechiles> 
      <Vechiles items={bikes} title='list of bikes' ></Vechiles>
      <Vechiles items={trucks} title='list of trucks' ></Vechiles> */}
      <CoursesList2 courses={getCourses()} ></CoursesList2>
      <ProductList2 products={fetchproducts()}></ProductList2>
      <Carslist2  cars={getCars()}></Carslist2>
    </div>
    
      
     
  )
}

export default App
