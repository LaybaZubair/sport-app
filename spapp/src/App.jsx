import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoes from './Shoes'
import Filters from './Filters'
import Cc from './Cc'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      
   
      <Navbar/>
      <Shoes/>
      

      <div className='abc'>
      <Filters/>
      <Cc/>
 
      </div>
    
      
    </>
    
  )
}

export default App
