
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <MainRoutes/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
