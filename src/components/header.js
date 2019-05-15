import React, { Component } from 'react';

class Header extends Component {

  render() {
  	var headerStyle = {
  		color: this.props.color,
  	}
    return (
      <h1 className="header tc center" style={headerStyle}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
