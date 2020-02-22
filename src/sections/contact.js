import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';

import bg1 from '../images/cta-bg-new.png';
import bg2 from '../images/cta-bg-new.svg';
import bg3 from '../images/cta-bg-new.svg';
import bgwebp1 from '../images/cta-bg-new.webp';
import bgwebp2 from '../images/cta-bg-new.webp';
import bgwebp3 from '../images/cta-bg-new.webp';

import bgm1 from '../images/cta-bg-new-mobile.jpg';
import bgm2 from '../images/cta-bg-new-mobile.svg';
import bgm3 from '../images/cta-bg-new-mobile.svg';
import bgmwebp1 from '../images/cta-bg-new-mobile.webp';
import bgmwebp2 from '../images/cta-bg-new-mobile.webp';
import bgmwebp3 from '../images/cta-bg-new-mobile.webp';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 479 ? true : false,
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
    if($(window).width() <= 479) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    var bg = this.state.webp ? [bgwebp1, bgwebp2, bgwebp3]:[bg1, bg2, bg3];
    var bgm = this.state.webp ? [bgmwebp1, bgmwebp2, bgmwebp3]:[bgm1, bgm2, bgm3];
    var data = this.props.data[gData["sections"][8]];
    var bgI = this.state.mobile ? "url("+bgm[data.id - 1]+")" : "url("+bg[data.id - 1]+")";
    var sectionStyle = {
  		backgroundImage: bgI,
  		backgroundPosition: "center top",
  		backgroundSize: "cover", 
  		backgroundRepeat: "no-repeat",
  		minHeight: this.state.mobile ? "310px" : "530px",
      paddingBottom: 0
  	}
    var align = this.state.mobile ? {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "90px"
    }: null

    var mb = this.state.mobile ? "f18 mb30" : "f30 mb40";
    var flex = this.state.mobile ? "":"flex items-center";
    return (
      <section id={gData["sections"][8]} className={flex + " relative"} style={sectionStyle}>
      	<div className="hide content ph0 mw8 center tc" style={align}>
      	  <h2 className={"white ls2 lh-copy fw4 ph2 mv0 tshadow nowrap "+mb}>"有相關設計需求，歡迎聯繫！"</h2>
      	  <Button content={"聯繫 TONE"} shadow={true} scale={1} center={true} link={"https://forms.gle/STg7tLYVwDHZWJHK7"} blank={true}/>
      	</div>
      </section>
    );
  }
}

export default Contact;
