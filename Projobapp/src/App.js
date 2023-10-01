import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
   <Routes>
  <Route path='/' element ={<Home/>}/>
 </Routes>
 <Navbar/>
 </>
 
  );
}

export default App;
