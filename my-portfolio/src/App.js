
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import React from 'react'
import {Routes, Route} from "react-router-dom"
import ResumeNew from './components/Resume'
import { Homepage } from './pages/Homepage';

function App() {


 
  return (
    <div className="App">

       <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path='/resume' element={<ResumeNew/>}></Route>
        </Routes>
       <Footer/>  
     
    </div>
  );
}

export default App;
