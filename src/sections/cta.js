import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import $ from 'jquery';
import LottieControl from '../components/lottie.js';

import * as animation1a from '../images/animations/dataA.json';
import * as animation1b from '../images/animations/dataB.json';
import * as animation1c from '../images/animations/dataC.json';
import * as animation2a from '../images/animations/dataA.json';
import * as animation2b from '../images/animations/dataB.json';
import * as animation2c from '../images/animations/dataC.json';
import * as animation3a from '../images/animations/dataA.json';
import * as animation3b from '../images/animations/dataB.json';
import * as animation3c from '../images/animations/dataC.json';

var animations = [
  [animation1a, animation1b, animation1c],
  [animation2a, animation2b, animation2c],
  [animation3a, animation3b, animation3c],
]

class CTA extends Component {
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
    var data = this.props.data[gData["sections"][3]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var moreArrow = {
      position: "relative",
      top: "3px",
      marginLeft: "3px",
    }
    var dContent = [];
    var mContent = [];
    for(var i = 0; i < 3; i++) {
      var temp = (
        <div className="fl w-third pa2" key={i}>
          <div className="fl w-100 relative mb3 expand-icons">
            <LottieControl data1={animations[data.id-1][i]} open={false} id={"animationCTA0"} offset={0}/>
          </div>
          <div className="bg-white pa4 color-content">
              <h2 className="f25 fw4 mt4 mb1 lh-medium">{data.content[i]["tagline"]}</h2>
              <h3 className="f4 fw4 mt0 lh-medium color-red">{data.content[i]["title"]}</h3>
              <p className="f5 fw3 lh-medium mv0">{data.content[i]["paragraph"]}</p>
              <a href={data.content[i]["url"]} target="_blank" rel="noopener noreferrer" className="more"><p className="fw4 mv3">
              了解更多 <span className="fw7 f125" style={moreArrow}>></span>
              </p></a>
          </div>
        </div>
      )
      var mtemp = (
        <div className="dib w-80 pa2" key={i}>
          <div className="fl w-100 relative mb3 expand-icons">
            <LottieControl data1={animations[data.id-1][i]} open={false} id={"animationCTA0"} offset={0}/>
          </div>
          <div className="bg-white pa4 color-content">
              <h2 className="f25 fw4 mt4 mb1 lh-medium">{data.content[i]["tagline"]}</h2>
              <h3 className="f4 fw4 mt0 lh-medium color-red">{data.content[i]["title"]}</h3>
              <p className="f5 fw3 lh-medium mv0">{data.content[i]["paragraph"]}</p>
              <a href={data.content[i]["url"]} target="_blank" rel="noopener noreferrer" className="more"><p className="fw4 mv3">
              了解更多 <span className="fw7 f125" style={moreArrow}>></span>
              </p></a>
          </div>
        </div>
      )
      dContent.push(temp);
      mContent.push(mtemp);
    }

    var content = this.state.mobile ? (
      <div className="cf ph2-ns nowrap overflow-x-scroll overflow-y-hidden">
        {mContent}
      </div>
    ):(
      <div className="cf ph2-ns">
        {dContent}
      </div>
    )
    
    return (
      <section id={gData["sections"][3]} style={sectionStyle}>
        <div className="mw8 center ph3-ns">          
          {content}
        </div>
      </section>
    );
  }
}

export default CTA;
