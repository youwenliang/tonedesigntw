import React, { Component } from 'react';
import logo from '../images/tone-white.svg';
import $ from 'jquery'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 768 ? true : false
    };
  }
  componentDidMount(){
    var $this = this;
    function checkMobile() {
      if($(window).width() <= 768) {
        $this.setState({mobile:true});
      }
      else $this.setState({mobile:false});
    }
    $(window).on('resize orientationchange', checkMobile);
  }
  render() {
  	var footerStyle = {
  		width: "100%",
  		height: this.state.mobile ? "190px":"200px",
  		background: "#4B5B7F",
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0
  	}
    var footerText = {
      color: "#adbbcc",
      fontSize: this.state.mobile ? "14px" : "18px"
    }
    var column = this.state.mobile ? "tc flex-column justify-center" : "justify-between"
    return (
      <footer className="footer flex items-center" style={footerStyle}>
        <div className={"content ph4 mw1100 center w-100 flex "+column}>
          <img src={logo} width={this.state.mobile ? "160px":"220px"} className={this.state.mobile ? "center" : ""} alt="Tone Design"/>
          <p className="ls-none fw3" style={footerText}>© 2019 TONE design, all rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
