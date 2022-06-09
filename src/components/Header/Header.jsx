import React from 'react';
import CTA from './CTA';
import './Header.css'
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/Me/sayan cut.png'

const Header = () => {
    return (
        <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sayan Paul</h1>
        <h5 className="text-light">Jr Frontend Developer</h5>
        <CTA></CTA>

        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img src={ME} alt="Not available Now" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
    );
};

export default Header;