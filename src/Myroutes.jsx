import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Main from './components/Pages/Main'
import Test from './components/Pages/Test'
import About from './components/Pages/About'
import Register from './components/Pages/Register'
import Login from './components/Pages/Login'

import FAQs from './components/Pages/FAQs'
import Contact from './components/Pages/contact'
import Cart from './components/Pages/Cart'
import Deals from './components/Pages/Deals'
import Hooks from './components/Pages/Hooks'
import Counter from './Hooks/Counter'

const Myroutes = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path= '/' element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path='/test' element={<Test/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/faq' element={<FAQs/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/deals' element={<Deals/>}/>
              <Route path='/hooks' element={<Hooks/>}/>

              {/* //Hooks */}
              <Route path='/counter' element={<Counter/>}/>
            </Route>
            
        </Routes>
      
      </BrowserRouter>
  )
}

export default Myroutes