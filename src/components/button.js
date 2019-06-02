import React, { Component } from 'react';

class Button extends Component {
  render() {
    var buttonStyle = {
      background: "linear-gradient(to left, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      padding: "16px 30px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top",
      textShadow: "0 0 5px rgba(122,72,0,.2)"
    }
    return (
      <div className="button white tc f4 br3 dib pointer fw4" style={buttonStyle}>
        {this.props.content}
      </div>
    );
  }
}

export default Button;
