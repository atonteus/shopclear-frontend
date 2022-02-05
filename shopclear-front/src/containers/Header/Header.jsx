import React from 'react';
// import contAcess from '../../assets/contAcess.png';
// import modelServiceProvider from '../../assets/modelServiceProvider.png';
import './header.css';

const Header = () => (
  <div className="shop__header section__padding" id="home">
    <div className="shop__header-content">
      <h1 className="gradient__text">Shop Clear Services __ </h1>
      <p>More info</p>

      <div className="shop__header-content__input">
        <input type="email" placeholder="Seu endereço de email" />
        <button type="button">Sign Up!</button>
      </div>

      <div className="shop__header-content__people">
        {/* <img src={contAcess} alt=''/> */}
        <p>Cont acess</p>
      </div>
    </div>

    <div className="shop__header-image">
      {/* <img src={modelServiceProvider} alt=''/> */}
    </div>
  </div>
);

export default Header;
