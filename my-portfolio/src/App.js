
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Project } from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
