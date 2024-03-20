import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portifolio from './pages/Portifolio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (

    <Router>
      <div >

      <div className="image-container">
        <img
          src="./logo.png"
          alt="Logo"
        />
      </div>


         {/* Menu de Navegação Bootstrap */}
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"> </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-center">
        <li className="nav-item">
          <Link className="nav-link" to="/Portifolio">
            Portifólio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Sobre">
            Sobre
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contato">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        {/* Rotas */}
        <Routes>
          <Route path="/Portifolio" element={<Portifolio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Contato" element={<Contato/>} />
        </Routes>
      </div>
    </Router>
    
  );
  
}

export default NavBar;
