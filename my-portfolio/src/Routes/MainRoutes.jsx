import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Home} from "../components/Home"
import {Footer} from "../components/Footer"
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/contact" element={<Footer/>}></Route>
        </Routes>
    </div>
  )
}
