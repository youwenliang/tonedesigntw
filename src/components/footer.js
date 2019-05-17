import React, { Component } from 'react';
import logo from '../images/tonedesign.svg';

class Footer extends Component {
  render() {
  	var footerStyle = {
  		width: "100%",
  		height: "320px",
  		background: "#4B5B7F",
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0
  	}
    return (
      <footer className="footer flex items-center" style={footerStyle}>
        <div className="content ph4 mw8 center w-100">
          <img src={logo} height="45px"/>
        </div>
      </footer>
    );
  }
}

export default Footer;
