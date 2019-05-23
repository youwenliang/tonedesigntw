import React, { Component } from 'react';

class Header extends Component {

  render() {
  	var headerStyle = {
  		color: this.props.color,
      letterSpacing: ".125rem"
  	}
    var m = this.props.margin ?  "mb5-ns mb4" : "mb0";
    return (
      <h1 className={"header tc center mt0 f25-l fw5 "+m} style={headerStyle}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
