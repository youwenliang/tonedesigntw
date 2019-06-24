import React, { Component } from 'react';
import logo from '../images/tone-white.svg';

class Footer extends Component {
  render() {
  	var footerStyle = {
  		width: "100%",
  		height: "200px",
  		background: "#4B5B7F",
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0
  	}
    var footerText = {
      color: "#adbbcc"
    }
    return (
      <footer className="footer flex items-center" style={footerStyle}>
        <div className="content ph4 mw1100 center w-100 flex justify-between">
          <img src={logo} width="220px" alt="Tone Design"/>
          <p className="ls-none fw3" style={footerText}>© 2019 TONE design, all rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
