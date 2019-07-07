import React, { Component } from 'react';
import $ from 'jquery';
import toneC from '../images/tone-color.svg';
import toneW from '../images/tone-white.svg';
import close from '../images/close-menu.svg';
import open from '../images/open-menu.svg';
import openC from '../images/open-menuC.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      mobile: false,
      open: false
    }
  }
  componentDidMount() {
    var $t = this;
    function checkMobile() {
      if($(window).width() <= 768) {
        $t.setState({mobile:true});
      }
      else $t.setState({mobile:false});
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });

    var lastScrollTop = 0;
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
       var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
       if(st <= $(window).height() - 100) {
          $t.setState({fixed: false});
          if(st >= 80) {
            $('.nav').addClass('hide');
          } else {
            $('.nav').removeClass('hide');
          }
       }
       else {
          $t.setState({fixed: true})
          $('.nav').removeClass('hide');
       }
    }, false);
  }

  closePanel() {
    this.setState({open: false})
    $('body').removeClass('noscroll');
  }
  openPanel() {
    this.setState({open: true})
    $('body').addClass('noscroll');
  }

  
  render() {
  	var navStyle = {
      width: "100%",
      height: this.state.mobile?"55px":"66px",
      maxWidth: "1440px",
      left: 0,
      right: 0,
      margin: "auto",
      fontFamily: "'Montserrat', sans-serif"
    }

    var position = this.state.fixed ? "fixed" : "absolute";

    var bgNav = {
      background: this.state.fixed ? "white" : "transparent",
      zIndex: 100,
      width: "100%",
      height: this.state.mobile?"55px":"66px",
      boxShadow: this.state.fixed ? "0px 2px 8px rgba(0,0,0,.15)" : "none",
    }

    var buttonLink = this.state.fixed ? {
      width: "110px",
      height: "35px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px",
      fontWeight: "400"
    }: {
      width: "110px",
      height: "35px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px",
      fontWeight: "400",
      border: "1px solid rgba(255,255,255,.8)",
      color: "rgba(255,255,255,.8)"
    }

    var buttonA = {
      color: this.state.fixed ? "#ffffff" : "rgba(255,255,255,.8)",
      position: "relative",
      lineHeight: "34px"
    }

    var link = {
      color: this.state.fixed ? "#505F81" : "rgba(255,255,255,.8)"
    }

    var logo = this.state.fixed ? toneC : toneW;
    var urls = this.state.mobile ? (
      <img src={this.state.fixed ? openC : open} width="20" className="cp" onClick={this.openPanel.bind(this)}/>
      ) : (
      <ul className="flex flex-row justify-between items-center f18 ls-none fw3">
        <li><a href="#" style={link}>Work</a></li>
        <li><a href="#" style={link}>Blog</a></li>
        <li className="buttonLink" style={buttonLink}><a href="#" style={buttonA}>Contact</a></li>
      </ul>
    )
    var w, ty, tx;
    if(this.state.mobile) {
      if(this.state.fixed) {
        w = "130"
        ty = "0"
        tx = "0"
      }
      else {
        w = "160"
        ty = "0.275px"
        tx = "9px"
      }
    } else {
      if(this.state.fixed) {
        w = "180"
        ty = "0"
        tx = "0"
      }
      else {
        w = "210"
        ty = "24.425px";
        tx = "10px"
      }
    }

    var logoStyle = {
      transform: "translate("+tx+","+ty+")"
    }

    var mw = {
      maxWidth: "1440px",
      left: 0,
      right: 0,
      margin: "auto",
      width: "100%"
    }
    
    return (
      <nav className={"nav "+position} style={bgNav}>
        <div className="flex items-center justify-between flex-row ph3" style={navStyle}>
          <img src={logo} width={w} style = {logoStyle}/>
          {urls}
        </div>
        <Panel mobile={this.state.mobile} closePanel={this.closePanel.bind(this)} display={this.state.open}/>
      </nav>
    );
  }
}

export default Nav;

class Panel extends Component {
  render(){
    var panelStyle = {
      top: 0,
      left: 0,
      zIndex: 100,
      display: this.props.mobile ? "block" : "none",
      opacity: this.props.display ? 1 : 0,
      pointerEvents: this.props.display ? "auto" : "none",
      transition: "opacity .2s cubic-bezier(0.23, 1, 0.32, 1)",
      background: "rgba(255,255,255,.95)",
      fontFamily: "'Montserrat', sans-serif"
    }
    var ulink = {
      marginTop: "115px"
    }
    var link = {
      marginBottom: "50px"
    }
    var linkA = {
      color: "#505F81",
      fontSize: "25px"
    }
    return (
      <div className="w-100 vh-100 fixed ph3" style={panelStyle}>
        <div className="flex items-center justify-between" style={{height:"55px"}}>
          <img src={toneC} width="130"/>
          <img src={close} width="20" className="cp" onClick={this.props.closePanel}/>
        </div>
        <ul className="flex flex-column tc f18 ls-none fw3 pa0" style={ulink}>
          <li style={link}><a href="#" style={linkA}>Work</a></li>
          <li style={link}><a href="#" style={linkA}>Blog</a></li>
          <li style={link}><a href="#" style={linkA}>Contact</a></li>
        </ul>
      </div>
    )
  }
}
