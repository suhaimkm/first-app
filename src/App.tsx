import { useState } from 'react'

import './App.css'

import CoursesList from './components/CoursesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  
      <CoursesList />
      
    </div>
    
      
     
  )
}

export default App
