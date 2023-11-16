
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';

import {  Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        

      </Routes>
      <Footer/>
      
      
      
      
      
    </div>
  );
}

export default App;
