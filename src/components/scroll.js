import React, { Component } from 'react';
import $ from 'jquery';
import data from '../data/data.js';

class Scroll extends Component {
  componentDidMount(){
    var id = [data["sections"][0], data["sections"][2], data["sections"][4], data["sections"][6], data["sections"][7]];
    $('#section-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 800);
      return false;
    });
    $(window).scroll( function(){
      for (var i = 0; i < 5; i++) {
        if($(window).scrollTop() >= $('#'+id[i]).offset().top - $(window).height()/2) {
          $('.nav-link.active').removeClass('active');
          $('a[href="#'+id[i]+'"]').addClass('active');
        }
      }
    });
  }
  render() {
    var scrollStyle = {
      fontWeight: 400
    }
    return (
      <div id="section-nav" style={scrollStyle}>
        <a className="nav-link active" href={"#"+data["sections"][0]}>{data["sections"][0]}</a>
        <a className="nav-link" href={"#"+data["sections"][2]}>{data["sections"][2]}</a>
        <a className="nav-link" href={"#"+data["sections"][4]}>{data["sections"][4]}</a>
        <a className="nav-link" href={"#"+data["sections"][6]}>{data["sections"][6]}</a>
        <a className="nav-link" href={"#"+data["sections"][7]}>{data["sections"][7]}</a>
      </div>
    );
  }
}

export default Scroll;
