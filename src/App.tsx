import { useState } from 'react'

import './App.css'
import AboutUs from './components/AboutUs'
import Carslist from './components/Cars'
import Cars from './components/Cars'

import CoursesList from './components/CoursesList'
import ProductList from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductList/> 
    </div>
    
      
     
  )
}

export default App
