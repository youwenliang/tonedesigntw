import React, { Component } from 'react';
import Header from '../components/header.js';
import Parallax from '../components/parallax.js';
import gData from '../data/data.js';

import LazyLoad from 'react-lazy-load';
import imgURL from '../images/taipei@2x.png';
import imgURLWebp from '../images/taipei2x.webp';

import logo1 from '../images/logos/1-1.svg';
import logo2 from '../images/logos/1-2.svg';
import logo3 from '../images/logos/1-3.svg';
import logo4 from '../images/logos/1-4.svg';
import logo5 from '../images/logos/2-1.svg';
import logo6 from '../images/logos/2-2.svg';
import logo7 from '../images/logos/2-3.svg';
import logo8 from '../images/logos/2-4.svg';
import logo9 from '../images/logos/3-1.svg';
import logo10 from '../images/logos/3-2.svg';
import logo11 from '../images/logos/3-3.svg';
import logo12 from '../images/logos/3-4.svg';

import $ from 'jquery'

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 768 ? true : false,
      webp: false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
    async function supportsWebp() {
      if (!self.createImageBitmap) return false;
      
      const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      const blob = await fetch(webpData).then(r => r.blob());
      return createImageBitmap(blob).then(() => true, () => false);
    }

    (async () => {
      if(await supportsWebp()) {
        console.log('does support');
        this.setState({webp: true});
      }
      else {
        console.log('does not support');
        this.setState({webp: false});
      }
    })();
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
  	var sectionStyle = {
  		background: "#ffffff"
  	}
  	var logoURL = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];
    var logoName = ["國泰世華銀行","國泰金控","國泰人壽","Eatgether","g0v","泛科學","我們的島","pfizer","開放文化基金會","Acer","skymizer","臺北市立動物園"];
  	var logoList = [];
  	for(var i = 0; i < logoURL.length; i++){
  		logoList.push(
  			<div className="fl w-50 w-third-m w-25-l ph0 tc o-80 mv0-ns mv3" key={i}>
          <LazyLoad height={this.state.mobile? 40 : 65} offsetVertical={50}>
  				  <img src={logoURL[i]} alt={logoName[i]}/>
          </LazyLoad>
  			</div>
  		)
  	}
    var mt = {
      marginTop: "-15px"
    }
    var mb = this.state.mobile ? "mb60" : "mb80"
    var content = (
        <div className="content ph4-ns ph2 mw54rem w-100 center z2 relative">
          <Header title={"合作客戶"} color="#fff" margin={false}/>
          <p className={"tagline hide f4 fw3 color-red tc mt4-ns mt3 lh-medium ls-medium ph2 "+mb}>眾多知名客戶選擇，值得業界信賴。</p>
          <div className="hide cf ph2-ns" style={mt}>
            {logoList}
          </div>
        </div>
    )
    var imgB = this.state.webp ? imgURLWebp : imgURL; 

    return (
      <section id={gData["sections"][6]} style={sectionStyle} className="relative pv0">
        <Parallax content={content} img={imgB} mask={"#4c5b7f"}/>
      </section>
    );
  }
}

export default Clients;
