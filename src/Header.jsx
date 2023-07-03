import React from 'react';
import logo from './logo.png'


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="description-container">
        <h1 className="title">Bière Lacaud</h1> 
        <p className="subtitle"> Une bière à tomber par terre </p>
      </div>
    </header>
  );
};

export default Header;