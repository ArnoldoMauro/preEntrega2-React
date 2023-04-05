import React from "react";
import {Link} from "react-router-dom"
import '../App.css';
import '../images/bodega-logo.png';
import logo from '../images/bodega-logo.png';
import carrito from '../images/shopping-cart_1.png';

function BootstrapNavbar() {
    return (
       
        
  <div>
    <nav className="navbar fixed-top navbar-expand-lg bg-light "> 
      <div className='container-fluid' >
      
        <Link className="navbar-brand" to="/">
        <img src ={logo} alt ='Bodega de Campo' width={70}/>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="#" to="/">Acerca_de</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Malbec" to="/">Malbec</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Cabernet" to="/">Cabernet Sauvignon</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Syrah" to="/">Syrah</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="#" to="/">Merlot</Link>
            </li>

            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/categorys" role="button" data-bs-toggle="dropdown" aria-expanded="false">Varietales</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categorys/malbec">Malbec</Link></li>
                <li><Link className="dropdown-item" to="/categorys/cabernet_sauvignon">Cabernet Sauvignon</Link></li>
                <li><Link className="dropdown-item" to="/categorys/syrah">Syrah</Link></li>
                <li><Link className="dropdown-item" to="/categorys/merlot">Merlot</Link></li>
                <li><Link className="dropdown-item" to="#!">Syrah</Link></li>
              </ul>
            </li> */}
            
            <li className="nav-item">
              <Link className="nav-link" to="#">Contacto</Link>
            </li>
            
          </ul>
          
         
          
          {/* Carrito */}
          
          <div className="cart-menu align-items-center d-flex">
            <div className="sidebar-social">
              <ul>
                <li>
                  <div className="cart-icono">
                    <img src ={carrito} alt ='icono carrito' width={30}/>
                    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">0</span>
                  </div> 
                </li>
              </ul>
            </div>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  </div>
  )
}
export default BootstrapNavbar;
