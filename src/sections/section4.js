import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import $ from 'jquery';

import icon1_1 from '../images/icons/圖-1.svg';
import icon1_2 from '../images/icons/圖-2.svg';
import icon1_3 from '../images/icons/圖-3.svg';
import icon1_4 from '../images/icons/圖-4.svg';
import icon1_5 from '../images/icons/圖-5.svg';
import icon2_1 from '../images/icons/影片-1.svg';
import icon2_2 from '../images/icons/影片-2.svg';
import icon2_3 from '../images/icons/影片-3.svg';
import icon2_4 from '../images/icons/影片-4.svg';
import icon2_5 from '../images/icons/影片-5.svg';
import icon3_1 from '../images/icons/網站-1.svg';
import icon3_2 from '../images/icons/網站-2.svg';
import icon3_3 from '../images/icons/網站-3.svg';
import icon3_4 from '../images/icons/網站-4.svg';
import icon3_5 from '../images/icons/網站-5.svg';

var icons = [
  icon1_1, icon1_2, icon1_3, icon1_4, icon1_5, 
  icon2_1, icon2_2, icon2_3, icon2_4, icon2_5, 
  icon3_1, icon3_2, icon3_3, icon3_4, icon3_5, 
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
      console.log($this.state.mobile);
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
      borderTop: "2px #dbe1e9 solid"
    }

    var contentList = [];
    for(var i = 0; i <15; i++) {
      var x = Math.floor(i/5);
      var y = i%5;
      var content = (
        <div className="fl w-20-l w-100 pv2 ph0 tc">
          <div className="flex flex-column-l flex-row justify-center items-center">
            <img src={icons[i]} width="85" alt="icons"/>
            <div className="color-content2 tl tc-l ml4 ml0-l">
              <h3 className="f4 mb0 fw4 mt0 mt3-l">{data.title[x][y]}</h3>
              <p className="f5 mt2 mb0 mb2-l mw5-l ph3">{data.content[x][y]}</p>
            </div>
          </div>
        </div>
      )
      contentList.push(content);
    }

    return (
      <section id={gData["sections"][4]} style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title={data.sectionTitle}/>
          
          <div className="tab mb4 f4-ns f5">
            <button className="tablinks active ph5-l ph3 tc" onClick={(e) => this.handleClick(e, "content1")}>Content1</button>
            <button className="tablinks ph5-l ph3 tc" onClick={(e) => this.handleClick(e, "content2")}>Content2</button>
            <button className="tablinks ph5-l ph3 tc" onClick={(e) => this.handleClick(e, "content3")}>Content3</button>
          </div>

          <div id="content1" className="tabcontent active cf mt5">
            {contentList.slice(0,5)}
          </div>
          <div id="content2" className="tabcontent cf mt5">
            {contentList.slice(5,10)}
          </div>
          <div id="content3" className="tabcontent cf mt5">
            {contentList.slice(10,15)}
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
