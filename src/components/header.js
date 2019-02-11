import React, { Component } from 'react';

import logo from '../images/efg_logo.png'

import '../style/header.css';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="Container">
            <div className="LogoImage" >
              <img alt="Logo der evangelisch freien Gemeinde in Pforzheim" src={logo} ></img>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;


