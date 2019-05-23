import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';
import gData from '../data/data.js';

import circle from '../images/circle.png';
import waves from '../images/waves.png';

class Section3 extends Component {
  render() {
  	// import data
  	var data = this.props.data[gData["sections"][3]];
    var sectionStyle = {
      background: "#ffffff",
      borderTop: "2px #dbe1e9 solid"
    }
    var mask = {
      top: 0,
      left: 0,
      zIndex: 0
    }
    return (
      <section id={gData["sections"][3]} style={sectionStyle}>
        <div className="content ph4-ns ph2 mw9 center">
          <Header title={data.sectionTitle} color="#333333"/>
          <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
            <div className="fl w-100 w-50-l tr-l tc relative">
              <img className="z1 relative" src={circle} alt="test"/>
              <div className="absolute" style={mask}>
              	<img src={waves} alt="test"/>
              </div>
            </div>
            <div className="fl w-100 w-50-l ph4 tl-l tc mw6 mt4 mt0-l">
              <h2 className="f2125 color-content fw5">{data.title}</h2>
              <p className="lh-copy f5 fw3 color-content2 mb4">{data.content}</p>
              <Button content={data.button}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
