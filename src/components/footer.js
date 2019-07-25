import React, { Component } from 'react';
import logo from '../images/tone-white.svg';
import $ from 'jquery'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 849 ? true : false
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
    if($(window).width() <= 849) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
  	var footerStyle = {
  		width: "100%",
  		height: "200px",
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
    var mb = this.state.mobile ? "mb0" : ""
    return (
      <footer className="footer flex items-center" style={footerStyle}>
        <div className={"content ph4 mw1100 center w-100 flex "+column}>
          <img src={logo} width={this.state.mobile ? "160px":"220px"} className={this.state.mobile ? "center" : ""} alt="Tone Design"/>
          <p className={"ls-none fw3 "+mb} style={footerText}>© 2019 TONE design, all rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
