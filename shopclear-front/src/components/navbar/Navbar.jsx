import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/shopclear.svg'; 
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="shop__navbar">
      <div className="shop__navbar-links">
        <div className="shop__navbar-links_logo">
          <img src={logo} alt=''/>
        </div>
        <div className="shop__navbar-links_container">
           <p><a href="#home">Home</a></p>
           <p><a href="#cases">Cases</a></p>
           <p><a href="#about">About</a></p>
           <p><a href="#article">Article</a></p>
        </div>
      </div>
      <div className="shop__navbar-sign">
        <p>Entrar</p>
        <button type="button">Cadastre-se</button>
      </div>
      <div className="shop__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="shop__navbar-menu_container scale-up-center">
          <div className="shop__navbar-menu_container-links">
           <p><a href="#home">Home</a></p>
           <p><a href="#cases">Cases</a></p>
           <p><a href="#about">About</a></p>
           <p><a href="#article">Article</a></p>
          </div>
          <div className="shop__navbar-menu_container-links-sign">
            <p>Entrar</p>
            <button type="button">Cadastre-se</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
