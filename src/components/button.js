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
      border: "#ffdf00 3px solid",
      color: "#6e849b"
    }
    var bshadow = this.props.shadow ? "bshadow" : "";
    var center = this.props.center ? "center" : "";
    return (
      <div className={"button tc f4-ns f5 br3 dib pointer fw4 flex items-center justify-center "+center+" "+bshadow} style={buttonStyle}>
        {this.props.content}
      </div>
    );
  }
}

export default Button;
