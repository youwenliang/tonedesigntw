import React, { Component } from 'react';

class Header extends Component {

  render() {
  	var headerStyle = {
  		color: this.props.color,
  	}
    var m = this.props.margin ?  "mb5-ns mb4" : "mb0";
    return (
      <h1 className={"header hide z10 relative tc center mt0 f1-ns f2 ls-large fw4 "+m} style={headerStyle}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
