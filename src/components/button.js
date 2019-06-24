import React, { Component } from 'react';

class Button extends Component {
  render() {
    var buttonStyle = !this.props.ghost ? {
      background: "linear-gradient(to left, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      width: "200px",
      height: "70px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top",
      textShadow: "0 0 5px rgba(122,72,0,.2)",
      border: "#ffdf00 3px solid",
      color: "white"
    } : {
      width: "200px",
      height: "70px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top",
      border: "#ffdf00 3px solid",
      color: "#6e849b"
    }
    var bshadow = this.props.shadow ? "bshadow" : "";
    var center = this.props.center ? "center" : "";
    return (
      <div className={"button tc f4 br3 dib pointer fw4 flex items-center justify-center "+center+" "+bshadow} style={buttonStyle}>
        {this.props.content}
      </div>
    );
  }
}

export default Button;
