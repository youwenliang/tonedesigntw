import React, { Component } from 'react';
import Header from '../components/header.js';
import LottieControl from '../components/lottie.js';
import shadow from '../images/shadow.png';
import gData from '../data/data.js';

import * as animationData1_1o from '../images/animations/data4_open.json'
import * as animationData1_1l from '../images/animations/data4_loop.json'
import * as animationData1_2o from '../images/animations/data5_open.json'
import * as animationData1_2l from '../images/animations/data5_loop.json'
import * as animationData1_3o from '../images/animations/data6_open.json'
import * as animationData1_3l from '../images/animations/data6_loop.json'

import * as animationData2_1o from '../images/animations/data4_open.json'
import * as animationData2_1l from '../images/animations/data4_loop.json'
import * as animationData2_2o from '../images/animations/data5_open.json'
import * as animationData2_2l from '../images/animations/data5_loop.json'
import * as animationData2_3o from '../images/animations/data6_open.json'
import * as animationData2_3l from '../images/animations/data6_loop.json'

import * as animationData3_1o from '../images/animations/data4_open.json'
import * as animationData3_1l from '../images/animations/data4_loop.json'
import * as animationData3_2o from '../images/animations/data5_open.json'
import * as animationData3_2l from '../images/animations/data5_loop.json'
import * as animationData3_3o from '../images/animations/data6_open.json'
import * as animationData3_3l from '../images/animations/data6_loop.json'

class Section1 extends Component {
  componentDidMount(){
    
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][1]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var shadowStyle = {
      marginTop: "-20px"
    }

    var animation1 = [
      [animationData1_1o, animationData1_1l],
      [animationData2_1o, animationData2_1l],
      [animationData3_1o, animationData3_1l]
    ]

    var animation2 = [
      [animationData1_2o, animationData1_2l],
      [animationData2_2o, animationData2_2l],
      [animationData3_2o, animationData3_2l]
    ]

    var animation3 = [
      [animationData1_3o, animationData1_3l],
      [animationData2_3o, animationData2_3l],
      [animationData3_3o, animationData3_3l]
    ]


    return (
      <section id={gData["sections"][1]} style={sectionStyle}>
        <div className="content ph4-ns ph2 mw75rem center">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={true}/>
          <div className="cf ph2-ns pt2">
            <div className="fl w-100 w-third-l ph2 tc">
              <div className="mw320 center w-70">
                <LottieControl data1={animation1[data.id - 1][0]} data2={animation1[data.id - 1][1]} open={true} offset={-135} id="animation1"/>
                <img className="ma0" src={shadow} alt="shadow" style={shadowStyle}/>
              </div>
              <h2 className="mt4 f4 fw5 color-content mb0">{data.title[0]}</h2>
              <p className="lh-copy mw5 center tl f5 fw3 color-content2">{data.content[0]}</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <div className="mw320 center w-70">
                <LottieControl data1={animation2[data.id - 1][0]} data2={animation2[data.id - 1][1]} open={true} offset={-135} id="animation2"/>
                <img className="ma0" src={shadow} alt="shadow" style={shadowStyle}/>
              </div>
              <h2 className="mt4 f4 fw5 color-content mb0">{data.title[1]}</h2>
              <p className="lh-copy mw5 center tl f5 fw3 color-content2">{data.content[1]}</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <div className="mw320 center w-70">
                <LottieControl data1={animation3[data.id - 1][0]} data2={animation3[data.id - 1][1]} open={true} offset={-135} id="animation3"/>
                <img className="ma0" src={shadow} alt="shadow" style={shadowStyle}/>
              </div>
              <h2 className="mt4 f4 fw5 color-content mb0">{data.title[2]}</h2>
              <p className="lh-copy mw5 center tl f5 fw3 color-content2">{data.content[1]}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
