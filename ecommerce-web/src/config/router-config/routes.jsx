import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/about'
import Contact from '../../screens/contact/contact'
import Products from '../../screens/products/products'
import Navbar from '../../components/Navbar'

const Routers = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />
<Route path='contact' element={<Contact/>} />
<Route path='products/:id' element={<Products/>} />

   </Routes>
   </BrowserRouter>
  )
}

export default Routers