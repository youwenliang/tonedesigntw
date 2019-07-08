import React, { Component } from 'react';
import $ from 'jquery'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      mobile: false
    }
  }
  componentDidMount() {
    var $t = this;
    function checkMobile() {
      if($(window).width() <= 479) {
        $t.setState({mobile:true});
      }
      else $t.setState({mobile:false});
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }
  render() {
    var buttonStyle = !this.props.ghost ? {
      background: "linear-gradient(to left, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      width: this.state.mobile ? "160px":"200px",
      height: this.state.mobile ? "56px":"70px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top",
      textShadow: "0 0 5px rgba(122,72,0,.2)",
      border: "#ffdf00 3px solid",
      color: "white"
    } : {
      width: this.state.mobile ? "160px":"200px",
      height: this.state.mobile ? "56px":"70px",
      letterSpacing: ".1rem",
      transform: "scale("+this.props.scale+")",
      transformOrigin: "center top",
      border: "double 3px transparent",
      color: "#6e849b",
      backgroundImage: "linear-gradient(white, white), linear-gradient(to right, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box"
    }
    var bshadow = this.props.shadow ? "bshadow" : "";
    bshadow = this.props.ghost ? "bshadow2" : "bshadow";
    var center = this.props.center ? "center" : "";
    var adjust = {
      position: "relative",
      lineHeight: this.state.mobile ? "49px":"63px",
      transform: "translateX(6px)"
    }
    return (
      <a href={this.props.link}>
        <div className={"button tc f4-ns f5 br3 dib pointer fw4 "+center+" "+bshadow} style={buttonStyle}>
          <p className="ma0" style={adjust}>{this.props.content}</p>
        </div>
      </a>
    );
  }
}

export default Button;
