import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../style/heart-beat.png';
import '../style/Header.scss';

const Header = () => (
  <header className="app-header flex">

    <Link to="/">
      <img width='50vw' src={logo} alt="logo" className="logo" />
    </Link>
    
    <h1 className="hero-title">
      React Jams! Choose your own music!
    </h1>

    <nav>
      <Link to='/'>Landing</Link>
      <Link to="/library">Library</Link>
    </nav>

  </header>
);

export default Header;
