import React, { Component } from 'react';
import Footer from './components/footer.js';
import Scroll from './components/scroll.js';
import Nav from './components/nav.js';
import Cover from './sections/cover.js';
import Button from './components/button.js';

//import Banner from './sections/banner.js';
import Section1 from './sections/section1.js';
import Section2 from './sections/section2.js';
import Section2m from './sections/section2m.js';
import CTA from './sections/cta.js';
import Section3 from './sections/section3.js';
import Section4 from './sections/section4.js';
import Clients from './sections/clients.js';
import Works from './sections/works.js';
import Contact from './sections/contact.js';
import Faq from './sections/faq.js';
import loadingIcon from './images/loading.gif';

import data from './data/data.js';
import $ from 'jquery';
import './App.css';
import asset from './images/asset.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data["topic1"],
      mobile: $(window).width() <= 959 ? true : false
    };
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount(){
    $(document).scrollTop(0);
    document.body.classList.add('ds');
    document.getElementById('loading').classList.remove('fade');

    setTimeout(function(){
      document.getElementById('loading').classList.add('fade');
      document.body.classList.remove('ds');
    },100);
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 959) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    var loadingStyle = {
      backgroundImage: "url("+loadingIcon+")"
    }
    var bannerSection = {
      background: "#505F81"
    }
    /*
    var buttonLink = {
      width: "110px",
      height: "35px",
      textAlign: "center",
      borderRadius: "6px",
      fontWeight: "400",
      border: "1px solid rgba(255,255,255,.8)",
      color: "rgba(255,255,255,.8)",
      textDecoration: "none",
      lineHeight: "35px",
      display: "block"
    }
    */

    var SalesKit = this.state.mobile ? (
        <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
          <div className="fl w-100 w-50-l tc relative z-1 pr3-l pr0 hide">
            <img className="mw640" src={asset} width="100%" alt="sales kit"/>
          </div>
          <div className="hide fl w-100 w-50-l ph4-ns ph3 tl-l mw6 mt0">
            <h3 className="f35 lh-medium white fw5 mv0 mb25 i nowrap">順手帶走一份 Sales kit 吧！</h3>
            <p className="lh-medium f5 fw4 white mb25 tl">動動手指下載 TONE design 的最新版 Sales kit，獲取更完整的設計作品資料！</p>
            <Button content={"下載 Sales kit"} shadow={true} ghost={true} link={"https://forms.gle/Ah5Wfr7EMYvyHbUt7"} blank={true}/>
          </div>
        </div>
    ) : (
        <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
          <div className="hide fl w-100 w-50-l ph4-ns ph3 tl-l mw6 mt0">
            <h3 className="f35 lh-medium white fw5 mv0 mb25 i nowrap">順手帶走一份 Sales kit 吧！</h3>
            <p className="lh-medium f5 fw4 white mb25 tl">動動手指下載 TONE design 的最新版 Sales kit，獲取更完整的設計作品資料！</p>
            <Button content={"下載 Sales kit"} shadow={true} ghost={true} link={"https://forms.gle/Ah5Wfr7EMYvyHbUt7"} blank={true}/>
          </div>
          <div className="fl w-100 w-50-l tc relative z-1 pr3-l pr0 hide">
            <img className="mw640" src={asset} width="100%" alt="sales kit"/>
          </div>
        </div>
    )

    return (
      <div className="App">
        <div id="loading" className="flex items-center justify-center" style={loadingStyle}></div>
        <Nav/>
        <Scroll/>
        <Cover data={this.state.data}/>
        {/*<Banner data={this.state.data}/>*/}
        <Section1 data={this.state.data}/>
        <Section2 data={this.state.data} display={!this.state.mobile}/>
        <Section2m data={this.state.data} display={this.state.mobile}/>
        <CTA data={this.state.data}/>
        <Section3 data={this.state.data}/>
        <Section4 data={this.state.data}/>
        <Clients data={this.state.data}/>
        <Works/>
        <Contact data={this.state.data}/>
        <section style={bannerSection}>
          <div className="content ph4-ns ph2 mw70rem center z1 relative">
            {SalesKit}
          </div>
        </section>
        <Faq data={this.state.data}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
