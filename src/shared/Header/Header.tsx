import React from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo";
import Navigation from "../Navigation";
import "./Header.scss";


const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Link to="/">
        <figure className="header__logo">
          <Logo/>
          <figcaption className="header__logo-name">Discounter</figcaption>
        </figure>
      </Link>
      <Navigation/>
    </div>
  </header>
);

export default Header;
