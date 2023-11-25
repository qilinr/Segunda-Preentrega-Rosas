import React from 'react';
import Cartwidget from '../cartwidget/cartwidget'
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h3>ecommerce</h3>
      </Link>
      <div className='categories'>
        <NavLink to={'category/celular'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Celulares</NavLink>
        <NavLink to={'category/tablet'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>tablets</NavLink>
        <NavLink to={'category/notebook'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>notebooks</NavLink>
      </div>
      <Cartwidget/>
    </nav>
  )
}
  
  export default Navbar;
  
  