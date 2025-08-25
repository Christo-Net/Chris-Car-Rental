import Header from './Components/Header'
import Hero from './Components/Hero'
import CarTypes from './Components/CarTypes'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DynamicRoute from './pages/DynamicRoute'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import { Navigator } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App
    {/* <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/about/:id' element={<DynamicRoute/>}/>

       <Route path='/contact' element={<Contact/>}/>
       

     </Routes>
    </BrowserRouter> */}
     
//     </>
//   )
// }

