import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import $ from 'jquery';

import icon1_1_1 from '../images/icons/圖-1.svg';
import icon1_1_2 from '../images/icons/圖-2.svg';
import icon1_1_3 from '../images/icons/圖-3.svg';
import icon1_1_4 from '../images/icons/圖-4.svg';
import icon1_1_5 from '../images/icons/圖-5.svg';
import icon1_2_1 from '../images/icons/影片-1.svg';
import icon1_2_2 from '../images/icons/影片-2.svg';
import icon1_2_3 from '../images/icons/影片-3.svg';
import icon1_2_4 from '../images/icons/影片-4.svg';
import icon1_2_5 from '../images/icons/影片-5.svg';
import icon1_3_1 from '../images/icons/網站-1.svg';
import icon1_3_2 from '../images/icons/網站-2.svg';
import icon1_3_3 from '../images/icons/網站-3.svg';
import icon1_3_4 from '../images/icons/網站-4.svg';
import icon1_3_5 from '../images/icons/網站-5.svg';

import icon2_1_1 from '../images/icons/圖-2.svg';
import icon2_1_2 from '../images/icons/圖-1.svg';
import icon2_1_3 from '../images/icons/圖-3.svg';
import icon2_1_4 from '../images/icons/圖-4.svg';
import icon2_1_5 from '../images/icons/圖-5.svg';
import icon2_2_1 from '../images/icons/影片-1.svg';
import icon2_2_2 from '../images/icons/影片-2.svg';
import icon2_2_3 from '../images/icons/影片-3.svg';
import icon2_2_4 from '../images/icons/影片-4.svg';
import icon2_2_5 from '../images/icons/影片-5.svg';
import icon2_3_1 from '../images/icons/網站-1.svg';
import icon2_3_2 from '../images/icons/網站-2.svg';
import icon2_3_3 from '../images/icons/網站-3.svg';
import icon2_3_4 from '../images/icons/網站-4.svg';
import icon2_3_5 from '../images/icons/網站-5.svg';

import icon3_1_1 from '../images/icons/圖-1.svg';
import icon3_1_2 from '../images/icons/圖-2.svg';
import icon3_1_3 from '../images/icons/圖-3.svg';
import icon3_1_4 from '../images/icons/圖-4.svg';
import icon3_1_5 from '../images/icons/圖-5.svg';
import icon3_2_1 from '../images/icons/影片-1.svg';
import icon3_2_2 from '../images/icons/影片-2.svg';
import icon3_2_3 from '../images/icons/影片-3.svg';
import icon3_2_4 from '../images/icons/影片-4.svg';
import icon3_2_5 from '../images/icons/影片-5.svg';
import icon3_3_1 from '../images/icons/網站-1.svg';
import icon3_3_2 from '../images/icons/網站-2.svg';
import icon3_3_3 from '../images/icons/網站-3.svg';
import icon3_3_4 from '../images/icons/網站-4.svg';
import icon3_3_5 from '../images/icons/網站-5.svg';

var icons = [
  [
    icon1_1_1, icon1_1_2, icon1_1_3, icon1_1_4, icon1_1_5, 
    icon1_2_1, icon1_2_2, icon1_2_3, icon1_2_4, icon1_2_5, 
    icon1_3_1, icon1_3_2, icon1_3_3, icon1_3_4, icon1_3_5
  ],
  [
    icon2_1_1, icon2_1_2, icon2_1_3, icon2_1_4, icon2_1_5, 
    icon2_2_1, icon2_2_2, icon2_2_3, icon2_2_4, icon2_2_5, 
    icon2_3_1, icon2_3_2, icon2_3_3, icon2_3_4, icon2_3_5
  ],
  [
    icon3_1_1, icon3_1_2, icon3_1_3, icon3_1_4, icon3_1_5, 
    icon3_2_1, icon3_2_2, icon3_2_3, icon3_2_4, icon3_2_5, 
    icon3_3_1, icon3_3_2, icon3_3_3, icon3_3_4, icon3_3_5
  ],
]

class Section4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
  }
  componentDidMount(){
    var $this = this;
    function checkMobile() {
      if($(window).width() <= 959) {
        $this.setState({mobile:true});
      }
      else $this.setState({mobile:false});
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }

  handleClick(e, t) {
    $('.tablinks.active, .tabcontent.active').removeClass('active');
    e.currentTarget.classList += " active";
    $('.tabcontent#'+t).addClass("active");
  }

  render() {
  	// import data
  	var data = this.props.data[gData["sections"][4]];
    var sectionStyle = {
      background: "#ffffff",
    }

    var contentList = [];
    var mw85 = {
      minWidth: "70px",
      marginBottom: this.state.mobile ? "0px":"25px"
    }
    var mt13 = {
      marginTop: this.state.mobile ? "0px" : "10px"
    }
    var miw = "miw180"
    for(var i = 0; i <15; i++) {
      var x = Math.floor(i/5);
      var y = i%5;
      var content = (
        <div className="fl w-20-l w-100 pv2-l pv3 ph0 tc" key={i}>
          <div className="flex flex-column-l flex-row justify-center items-center">
            <img src={icons[data.id - 1][i]} width="70" alt="icons" style={mw85}/>
            <div className={"color-content2 tl tc-l ml3 ml0-l "+miw}>
              <h3 className="f18 color-content fw4 mv0 dib db-l mr2 mr0-l">{data.title[x][y]}</h3>
              <p className="f15 fw3 color-fade lh-copy mv0 mw5-l ph3-l ph0 dib db-l" style={mt13}>{data.content[x][y]}</p>
            </div>
          </div>
        </div>
      )
      contentList.push(content);
    }
    var line1 = {
      borderBottom: "#ffdf00 2px solid",
      width: "80%",
      height: "1px",
      position: "absolute",
      top: "48px",
      left: 0,
      right: 0,
      margin: "auto",
      zIndex: 1
    }
    var line2 = {
      borderLeft: "#ffdf00 2px solid",
      height: "70%",
      width: "1px",
      position: "absolute",
      top: "90px",
      left: 0,
      right: 0,
      transform: "translateX(-98px)",
      margin: "auto",
      zIndex: 1
    }

    var color = [
      "color1", "color2", "color3"
    ]
    var mb = this.state.mobile ? "mb60" : "mb80"
    return (
      <section id={gData["sections"][4]} style={sectionStyle}>
        <div className="borderline top small"/>
        <div className="content ph4-ns ph2 mw8 center relative">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className={"tagline hide f4 fw3 color-fade tc mt4-ns mt3 lh-medium ls-medium ph2 "+mb}>{data.tagline}</p>
          <div className="hide tab mb50 mt5 f4-ns f6 tracked">
            <button className={color[data.id - 1]+" tablinks active ph3 tc"} onClick={(e) => this.handleClick(e, "content1")}>{data.section[0]}</button>
            <button className={color[data.id - 1]+" tablinks ph3 tc"} onClick={(e) => this.handleClick(e, "content2")}>{data.section[1]}</button>
            <button className={color[data.id - 1]+" tablinks ph3 tc"} onClick={(e) => this.handleClick(e, "content3")}>{data.section[2]}</button>
          </div>
          <div className="hide relative w-100 ph4 center">
            <div id="content1" className="tabcontent active cf mt4-ns mt3">
              {contentList.slice(0,5)}
            </div>
            <div id="content2" className="tabcontent cf mt4-ns mt3">
              {contentList.slice(5,10)}
            </div>
            <div id="content3" className="tabcontent cf mt4-ns mt3">
              {contentList.slice(10,15)}
            </div>
            <div id="yellow-line1" style={line1} className="db-l dn"></div>
            <div id="yellow-line2" style={line2} className="db dn-l"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
