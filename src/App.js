
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {  Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      
<Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        

      </Routes>
      
      
      
      
      
    </div>
  );
}

export default App;
