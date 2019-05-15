import React, { Component } from 'react';

class Footer extends Component {
  render() {
  	var footerStyle = {
  		display: "block",
  		width: "100%",
  		height: "320px",
  		background: "#4B5B7F",
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0
  	}
    return (
      <footer className="footer" style={footerStyle}>
      </footer>
    );
  }
}

export default Footer;
