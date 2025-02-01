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

function App() {
  const [count, setCount] = useState(0)
  const cars = ['toyota', 'honda', 'ford', 'chevy', 'tesla', 'nissan', 'bmw', 'audi', 'mercedes', 'volkswagen', 'subaru', 'mazda', 'hyundai', 'kia', 'volvo', 'porsche', 'jaguar', 'land rover', 'mini', 'fiat', 'alfa romeo', 'maserati', 'lamborghini', 'ferrari', 'bugatti', 'bentley'];
  const bikes = ['harley davidson', 'indian', 'bmw', 'ducati', 'triumph', 'yamaha', 'honda', 'suzuki', 'kawasaki', 'ktm', 'aprilia', 'mv agusta', 'royal enfield', 'bajaj', 'hero', 'tvs', 'jawa', 'husqvarna', 'benelli', 'norton', 'vespa', 'piaggio', 'aprilia', 'zero', 'cf moto', 'argo', 'can-am', 'kymco', 'vespa', 'piaggio', 'aprilia', 'zero', 'cf moto', 'argo', 'can-am', 'kymco'];
  const trucks = ['ford', 'chevy', 'gmc', 'ram', 'toyota', 'nissan', 'honda', 'mercedes', 'volkswagen', 'isuzu', 'mitsubishi', 'hino', 'freightliner', 'peterbilt', 'kenworth', 'international', 'western star', 'mack', 'volvo', 'scania', 'daf', 'iveco'];
  const courses = [
    {
      id: 1,
      title: "advanced web design",
      duration: "1 hours",
    },
    {
      id: 2,
      title: "python",
      duration: "2 hours",
    },
    {
      id: 3,
      title: "java",
      duration: "3 hours",
    }
  ];
  

  return (
    <div id = 'app'>
      <Vechiles items={cars} title='list of cars' ></Vechiles> 
      <Vechiles items={bikes} title='list of bikes' ></Vechiles>
      <Vechiles items={trucks} title='list of trucks' ></Vechiles>
      <CoursesList2 courses={courses} ></CoursesList2>
    </div>
    
      
     
  )
}

export default App
