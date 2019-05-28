import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';
import gData from '../data/data.js';

import circle1 from '../images/circle.png';
import circle2 from '../images/circle.png';
import circle3 from '../images/circle.png';
import waves from '../images/waves.png';

class Section3 extends Component {
  render() {
  	// import data
  	var data = this.props.data[gData["sections"][3]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var mask = {
      top: 0,
      left: 0,
      right: 0,
      zIndex: 0
    }
    var circles = [circle1, circle2, circle3];
    return (
      <section id={gData["sections"][3]} style={sectionStyle}>
        <div className="content ph4-ns ph2 mw9 center">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
            <div className="fl w-100 w-50-l tc relative">
              <img className="z1 relative w-80 center" src={circles[data.id - 1]} alt="test"/>
              <div className="absolute w-80 center" style={mask}>
              	<img src={waves} alt="test"/>
              </div>
            </div>
            <div className="fl w-100 w-50-l ph4 tl-l tc mw6 mt0">
              <h2 className="f4-ns f5 color-content fw5">{data.title}</h2>
              <p className="lh-copy f5-ns f6 fw3 color-content2 mb4 tl">{data.content}</p>
              <Button content={data.button}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
