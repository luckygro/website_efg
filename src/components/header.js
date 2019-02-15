import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/efg_logo.png'

import '../style/header.css';

class Header extends Component {

  state = {
    status: 'close',
    style: ''
  }

  handleChange = () => {

    // update state
    if(this.state.status == 'open') {
      this.setState({
        status: 'close',
        style: {maxHeight: '0px'}
      })
    
    } else {
      this.setState({
        status: 'open',
        style: {maxHeight: '300px'}
      })
    }
    console.log(this.state.status)
  } 
 
  render() {
    return (
        <header>
          <div className="Container">
            <div className="LogoImage" >
              <img alt="Logo der evangelisch freien Gemeinde in Pforzheim" src={logo} ></img>
            </div>
            <button className="Nav" onClick={this.handleChange}>MENÜ</button>
            <nav className={this.state.status}>
              <div>
                <a href="/">Home</a>
                <a href="/glaubensbekenntnis">Glaubensbekenntnis</a>
                <a href="/#kontakt">Kontakt</a>
                <a href="/impressum">Impressum</a>
              </div>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;


