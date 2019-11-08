import React, { Component } from 'react';
import Header from '../components/header.js';
import LottieControl from '../components/lottie.js';
import shadow from '../images/shadow.png';
import gData from '../data/data.js';
import $ from 'jquery';
import * as animationWaves from '../images/animations/small_wave_data.json'

import * as animationData1_1 from '../images/animations/A_data.json'
import * as animationData2_1 from '../images/animations/B_data.json'
import * as animationData3_1 from '../images/animations/C_data.json'

import * as animationData1_2 from '../images/animations/A_data.json'
import * as animationData2_2 from '../images/animations/B_data.json'
import * as animationData3_2 from '../images/animations/C_data.json'

import * as animationData1_3 from '../images/animations/A_data.json'
import * as animationData2_3 from '../images/animations/B_data.json'
import * as animationData3_3 from '../images/animations/C_data.json'

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 768 ? true : false
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
    if($(window).width() <= 768) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][1]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var shadowStyle = {
      marginTop: "-15px"
    }

    var animation1 = [animationData1_1, animationData2_1, animationData3_1]
    var animation2 = [animationData1_2, animationData2_2, animationData3_2]
    var animation3 = [animationData1_3, animationData2_3, animationData3_3]


    var animations = [animation1, animation2, animation3];

    var colors = [
      "color1", "color2", "color3"
    ]

    var tag = {
      width: "120px",
      padding: "0 20px",
      borderRadius: "8px",
      fontSize: "18px",
      height: "30px"
    }
    var tagContent = {
      position: "relative",
      height: "20px",
      top: ".5px",
      left: "1px"
    }
    var off = -1*($(window).height()/2 - 140);

    var contents = [];
    for(var i = 0; i < 3; i++) {
      var temp = (
        <div className="fl w-100 w-third-l ph3 tc" key={i}>
          <h2 className={colors[data.id - 1]+" hide tag fw4 mt0 mb30 tc center ls-medium flex justify-center items-center"} style={tag}><span style={tagContent}>{data.title[i]}</span></h2>
          <div className="mw240 center w-70 hide">
            <LottieControl data1={animations[data.id - 1][i]} open={false} offset={off} id={"animation"+i}/>
            <img className="ma0 mb2 dn db-ns" src={shadow} alt="shadow" style={shadowStyle}/>
          </div>              
          <p className="hide lh-medium mw180 center tl f5 fw4 color-content2 mt0 mb4-l mb5">{data.content[i]}</p>
        </div>
      )
      contents.push(temp);
    }

    var mb = this.state.mobile ? "mb60 mw480" : "mb90"
    var mb1 = this.state.mobile ? "mb25" : "mb30";
    var animation = {
      width: "140px"
    }
    return (
      <section id={gData["sections"][1]} style={sectionStyle}>
        <div className="borderline top small"/>
        <div className="content ph4-ns ph2 mw61rem center">
          {/*
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className={"tagline hide f4 fw3 color-fade tc mt4-ns mt3 lh-medium ls-medium ph2 "+mb2}>{data.tagline}</p>
          */}
          <div className={mb1 + " center hide"} style={animation}>
            <LottieControl data1={animationWaves} open={false} noloop={true} id="animationWaving" offset={0}/>
          </div>
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className={"center ph3 ph2-l center hide f125 fw3 color-content tc mt4-ns mt3 lh-large ls-medium "+mb} dangerouslySetInnerHTML={{__html:data.tagline}}></p>
          <div className="cf ph2-ns">
            {contents}
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
