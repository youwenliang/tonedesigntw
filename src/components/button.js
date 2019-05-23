import React, { Component } from 'react';

class Button extends Component {
  render() {
    var buttonStyle = {
      background: "linear-gradient(to left, rgba(255,223,0,1) 0%,rgba(255,189,0,1) 100%)",
      padding: "16px 30px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top"
    }
    return (
      <div className="button white tc f5 br3 dib pointer fw3" style={buttonStyle}>
        {this.props.content}
      </div>
    );
  }
}

export default Button;
