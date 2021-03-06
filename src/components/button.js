import React, { Component } from 'react';
import $ from 'jquery'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 479 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 479) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    var buttonStyle = !this.props.ghost ? {
      background: "linear-gradient(to left, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      width: this.state.mobile ? "160px":"200px",
      height: this.state.mobile ? "56px":"70px",
      letterSpacing: ".1rem",
      /*transform: "scale("+this.props.scale+")",*/
      transformOrigin: "center top",
      textShadow: "0 0 5px rgba(122,72,0,.2)",
      border: "#ffdf00 3px solid",
      color: "white",
      transition: "all .3s ease-in-out"
    } : {
      width: this.state.mobile ? "160px":"200px",
      height: this.state.mobile ? "56px":"70px",
      letterSpacing: ".1rem",
      /*transform: "scale("+this.props.scale+")",*/
      transformOrigin: "center top",
      border: !this.props.border ? "0px" : "double 3px transparent",
      color: "#6e849b",
      backgroundImage: "linear-gradient(white, white), linear-gradient(to right, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
      transition: "all .3s ease-in-out"
    }
    var bshadow = this.props.shadow ? "bshadow0" : "";
    bshadow = this.props.ghost ? (this.props.border ? "bshadow2":"bshadow3"): "bshadow";
    var center = this.props.center ? "center" : "";
    var adjust = {
      position: "relative",
      lineHeight: this.state.mobile ? "49px":"63px",
      transform: "translateX(0px)"
    }
    var target = this.props.blank ? "_blank": "";
    return (
      <a href={this.props.link} target={target} rel="noreferrer" className="dib">
        <div className={"button tc f4-ns f5 br3 dib pointer fw4 "+center+" "+bshadow} style={buttonStyle}>
          <p className="ma0" style={adjust}>{this.props.content}</p>
        </div>
      </a>
    );
  }
}

export default Button;
