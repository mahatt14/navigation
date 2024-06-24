import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import DataInfo from './DataInfo'
import Shop from './Shop'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import HeadlineCards from './Component/HeadlineCards'
import ImageSlider from './Component/ImageSlider'
import Food from './Component/Food'
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' h-screen items-center '>
     {/* <Navbar/>
     <Hero/>
     <HeadlineCards/>
     
     <Food/>
     <ImageSlider/> */}
    <Router>
    <Navbar/>
    </Router>
    
    
    </div>
  )
}

export default App
