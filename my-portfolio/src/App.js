
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import React from 'react'
import {Routes, Route} from "react-router-dom"
import ResumeNew from './components/Resume'
import { MainRoutes } from './Routes/MainRoutes';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path='/resume' element={<ResumeNew/>}></Route>
        </Routes>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
