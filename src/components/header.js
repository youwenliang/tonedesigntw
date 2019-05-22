import React, { Component } from 'react';

class Header extends Component {

  render() {
  	var headerStyle = {
  		color: this.props.color,
      letterSpacing: ".2rem"
  	}
    return (
      <h1 className="header tc center mt0 mb5-ns mb4 i f1 fw4" style={headerStyle}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
