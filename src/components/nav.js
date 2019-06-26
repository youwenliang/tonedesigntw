import React, { Component } from 'react';
import $ from 'jquery';
import toneC from '../images/tone-color.svg';
import toneW from '../images/tone-white.svg';

class Nav extends Component {
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
      color: this.state.fixed ? "#6e849b" : "rgba(255,255,255,.5)"
    }

    var logo = this.state.fixed ? toneC : toneW;
    var op = this.state.fixed ? "" : "o-0";
    var urls = this.state.mobile ? null : (
      <ul className="flex flex-row justify-between items-center f18 ls-none fw4">
        <li><a href="#" style={link}>Work</a></li>
        <li><a href="#" style={link}>Blog</a></li>
        <li><a href="#" style={buttonLink}>Contact</a></li>
      </ul>
    )

    return (
      <nav className="nav flex items-center justify-between flex-row ph5-ns ph3" style={navStyle}>
        <img src={logo} width={this.state.mobile ? "130":"180"} className={op}/>
        {urls}
      </nav>
    );
  }
}

export default Nav;
