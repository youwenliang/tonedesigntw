import React, { Component } from 'react';
import Header from '../components/header.js';
import LottieControl from '../components/lottie.js';
import shadow from '../images/shadow.png';
import gData from '../data/data.js';

import * as animationData1o from '../images/animations/data4_open.json'
import * as animationData1l from '../images/animations/data4_loop.json'
import * as animationData2o from '../images/animations/data5_open.json'
import * as animationData2l from '../images/animations/data5_loop.json'
import * as animationData3o from '../images/animations/data6_open.json'
import * as animationData3l from '../images/animations/data6_loop.json'

class Section1 extends Component {
  componentDidMount(){
    
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][1]];
    var sectionStyle = {
      background: "#ffffff"
    }
    return (
      <section id={gData["sections"][1]} style={sectionStyle}>
        <div className="content ph4 mw9 center">
          <Header title={data.sectionTitle} color="#4c5b7f"/>
          <div className="cf ph2-ns pt2">
            <div className="fl w-100 w-third-l ph2 tc">
              <div className="mw320 center">
                <LottieControl data1={animationData1o} data2={animationData1l} open={true} offset={-135} id="animation1"/>
                <img className="ma0" src={shadow} alt="shadow"/>
              </div>
              <h2 className="mt4 f2 fw4 color-content2 mb0">{data.title[0]}</h2>
              <p className="lh-copy mw5 center tl f4 color-content2">{data.content[0]}</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <div className="mw320 center">
                <LottieControl data1={animationData2o} data2={animationData2l} open={true} offset={-135} id="animation2"/>
                <img className="ma0" src={shadow} alt="shadow"/>
              </div>
              <h2 className="mt4 f2 fw4 color-content2 mb0">{data.title[1]}</h2>
              <p className="lh-copy mw5 center tl f4 color-content2">{data.content[1]}</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <div className="mw320 center">
                <LottieControl data1={animationData3o} data2={animationData3l} open={true} offset={-135} id="animation3"/>
                <img className="ma0" src={shadow} alt="shadow"/>
              </div>
              <h2 className="mt4 f2 fw4 color-content2 mb0">{data.title[2]}</h2>
              <p className="lh-copy mw5 center tl f4 color-content2">{data.content[1]}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
