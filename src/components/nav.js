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
  }
  openPanel() {
    this.setState({open: true})
  }

  
  render() {
  	var navStyle = {
      position: this.state.fixed ? "fixed" : "absolute",
      width: "100%",
      height: "66px",
      background: this.state.fixed ? "white" : "transparent",
      zIndex: 100,
      boxShadow: this.state.fixed ? "0px 2px 8px rgba(0,0,0,.15)" : "none"
    }

    var buttonLink = this.state.fixed ? {
      background: "linear-gradient(to left, rgba(253,221,1,1) 0%,rgba(253,187,5,1) 100%)",
      width: "110px",
      height: "35px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px"
    }: {
      color: "rgba(255,255,255,.5)"
    }

    var link = {
      color: this.state.fixed ? "#505F81" : "rgba(255,255,255,.5)"
    }

    var logo = this.state.fixed ? toneC : toneW;
    var op = this.state.fixed ? "" : "o-0";
    var urls = this.state.mobile ? (
      <img src={this.state.fixed ? openC : open} width="20" className="cp" onClick={this.openPanel.bind(this)}/>
      ) : (
      <ul className="flex flex-row justify-between items-center f18 ls-none fw4">
        <li><a href="#" style={link}>Work</a></li>
        <li><a href="#" style={link}>Blog</a></li>
        <li><a href="#" style={buttonLink}>Contact</a></li>
      </ul>
    )
    
    return (
      <nav>
        <div className="nav flex items-center justify-between flex-row ph5-l ph3" style={navStyle}>
          <img src={logo} width={this.state.mobile ? "130":"180"} className={op}/>
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
      transition: "opacity .2s cubic-bezier(0.23, 1, 0.32, 1)"
    }
    var ulink = {
      marginTop: "104px"
    }
    var link = {
      color: "#505F81",
      fontSize: "25px",
      marginBottom: "50px"
    }
    return (
      <div className="w-100 vh-100 fixed bg-white ph3" style={panelStyle}>
        <div className="flex items-center justify-between" style={{height: "66px"}}>
          <img src={toneC} width="130"/>
          <img src={close} width="20" className="cp" onClick={this.props.closePanel}/>
        </div>
        <ul className="flex flex-column tc f18 ls-none fw4 pa0" style={ulink}>
          <li style={link}><a href="#">Work</a></li>
          <li style={link}><a href="#">Blog</a></li>
          <li style={link}><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}
