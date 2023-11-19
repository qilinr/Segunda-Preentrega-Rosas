import React from 'react';
import Cartwidget from '../cartwidget/cartwidget'
function Navbar() {
    return (
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href='#'>Catalgo</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <Cartwidget />
      </nav>
    );
  }
  
  
  export default Navbar;
  
  