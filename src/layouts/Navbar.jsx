import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart, HiX, HiMenu } from "react-icons/hi";
import Logo from '../assets/img/Logos/LogoBlanco.png';

import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to='/' className="nav-logo">
            <img className='LogoNavbar' src={Logo}></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cervezas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Aguardientes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Aguardientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Varios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Varios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Cartlist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <HiShoppingCart/>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? <HiX/> : <HiMenu/>}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar