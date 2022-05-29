import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Home} from "../components/Home"
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Project } from '../components/Project'
import ResumeNew from '../components/Resume'
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/projects' element={<Project/>}></Route>
            <Route path='/resume' element={<ResumeNew/>}></Route>
        </Routes>
    </div>
  )
}
