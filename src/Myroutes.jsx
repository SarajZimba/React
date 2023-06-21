import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default Myroutes



