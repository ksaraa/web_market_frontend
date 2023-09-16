
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar'
import Korpa from './Pages/Korpa/Korpa'
import Home from './Pages/Home/Home'
import Proizvodi from './Pages/Proizvodi/Proizvodi'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/proizvodi" Component={Proizvodi}/>
      <Route path="/korpa" Component={Korpa}/>
      <Route path="/prijava"/>

      </Routes>
    </Router>
  );

}

export default App;
