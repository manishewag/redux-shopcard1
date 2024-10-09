/* eslint-disable no-unused-vars */
import 'react-toastify/ReactToastify.css'

import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { ToastContainer } from 'react-toastify'


export default function App() {
  return (
   
        <BrowserRouter>
        <ToastContainer/>
         <Navbar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart'Component={Cart}></Route>
        </Routes>
        </BrowserRouter>
  
  )
}
