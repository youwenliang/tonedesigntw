import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import $ from 'jquery'

class Faq extends Component {
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
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
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
  		background: "#f7f8fa"
  	}

    var data = this.props.data[gData["sections"][8]];

  	var qContent = [
  		[
  		 "諮詢合作專案前，需要提供哪些初步資料？",
  		 "開始合作前，建議您先以簡單文字描述這次專案的目的、希望解決的問題、主要目標對象、製作預算規模，並填寫下方的連結表單，讓我們能快速了解重點需求，加快處理速度喔！<a href='https://toneproject.typeform.com/to/cLmHNY' target='_blank' rel='noreferrer' class='more'><p class='fw4 mt2'>點此填寫聯繫表單 <span className='fw7 f125 moreArrow'>»</span></p></a>",
  		],
  		[
  		 "專案的製作時程是多久？",
       "平均來說，從需求確認到製作完稿，一隻2分鐘的解釋影片，至少需要約六到八週工作時間。一<span class='ls-small'>份 8~10 </span>頁的資訊懶人包，需要四到六週的製作時間。網站則視需求規格而定，但建議至少預留八週以上工作時間。"
  		],
  		[
       "合作專案的報價如何計算？",
       "針對專案報價，主要依照以下項目進行評估：<p class='mv2'>1. 資料內容量的多寡。<br/>2. 視覺風格或網站功能複雜程度。<br/>3. 專案需求時程長短。<br/></p>由於每個專案的狀況都不盡相同，若您希望能得知更詳細的報價資訊，建議您直接聯繫我們，以取得更精確的報價內容喔！<a href='https://toneproject.typeform.com/to/cLmHNY' target='_blank' rel='noreferrer' class='more'><p class='fw4 mt2'>點此填寫聯繫表單 <span className='fw7 f125 moreArrow'>»</span></p></a>",
      ],
  		[
       "有沒<span class='ls-small'>有 SalesKit </span>或作品集可以下載或索取？",
       "有的，歡迎您先到我們的作品集頁面，瀏覽 TONE design 的歷年專案。您也可以點擊下方連結索取 Sales kit，我們會以最快的速度寄出！<a href='https://toneproject.typeform.com/to/jXgKRc' target='_blank' rel='noreferrer' class='more'><p class='fw4 mt2 mb0'>點此瀏覽作品集 <span className='fw7 f125 moreArrow'>»</span></p></a><a href='https://toneproject.typeform.com/to/jXgKRc' target='_blank' rel='noreferrer' class='more'><p class='fw4 mt2'>點此索取 Sales kit <span className='fw7 f125 moreArrow'>»</span></p></a>"
      ]
  	]
  	var qList = [];
    var bgColor = [
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
    ]
    var color = {
      background: bgColor[data.id - 1]
    }

  	for(var i = 0; i < qContent.length; i++){
  		qList.push(
  		  <div className="relative" key={i}>
  		  	<div className="collapsibleCircle absolute z1 white tc f4 fw6" style={color}>
            <span>{i+1}</span>
          </div>
	  	    <button className="collapsible f18 lh-copy fw4 color-content o-80" dangerouslySetInnerHTML={{__html:qContent[i][0]}}></button>
    			<div className="answers">
    			  <p className="lh-medium f5 fw3 color-content2" dangerouslySetInnerHTML={{__html:qContent[i][1]}}></p>
    			</div>
		    </div>
  		)
  	}
    var mb = this.state.mobile ? "mb60" : "mb80"
    return (
      <section id={gData["sections"][8]} style={sectionStyle}>
      	<div className="content ph4-ns ph2 mw54rem center">
      	  <Header title={"合作 Q&A"} color="#4C5B7F" margin={false}/>
          <p className={"tagline hide f4 fw3 color-fade tc mt4-ns mt3 lh-medium ls-medium ph2 "+mb}>影片製作預算多少？合作時程怎麼抓？這裡一次告訴你！</p>
      	  <div className="hide">
      	  	{qList}
      	  </div>
      	</div>
      </section>
    );
  }
}

export default Faq;
