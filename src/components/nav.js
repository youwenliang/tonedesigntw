import React, { Component } from 'react';

class Nav extends Component {
  render() {
  	var navStyle = {
  		display: "block",
  		position: "fixed",
  		width: "100%",
  		height: "74px",
  		background: "#222222",
  	}
    return (
      <nav className="nav" style={navStyle}>
      </nav>
    );
  }
}

export default Nav;
