import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {CreateProduct, MainContainer }from './index.js'


function Routers() {
  return <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
      <Route path='/home' element={<MainContainer/>}/>
      <Route path='/createItem' element={<CreateProduct/>}/>
  </Routes>
}

export default Routers