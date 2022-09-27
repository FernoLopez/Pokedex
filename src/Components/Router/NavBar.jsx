import React from 'react'
import { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  
  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>Pokedex</Link>
      </h1>
      <div onClick={clickMenuHam} className="header__menuham">
      <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink 
                to='/' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Welcome</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/home' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Login</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/pokedex' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className="navbar__label">Pokedex</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar