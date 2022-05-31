
import React from 'react'
import {Home} from "../components/Home"
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Project } from '../components/Project'

export const Homepage = () => {
  return (
    <div>
         <Home/>
        <About/>
        <Skills/>
        <Project/>
    </div>
  )
}
