import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';

class Faq extends Component {
  componentDidMount(){
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
  render() {
    var sectionStyle = {
  		background: "#f7f8fa"
  	}

  	var qContent = [
  		[
  		 "這是一段問題的敘述，這是一段問題的敘述這是一段問題的敘述",
  		 "可女點發！外的食是了了狀片後過的下件得。對傳今媽謝一……條舞是智麼止不，一體輕消年後風或人了化講新史容道賽：起體比這顯間產？實是嗎基招他即明房日獎經的營我人立，縣向失年自叫年拉界得黨紀？當與中組術，大親計根；對像持利料造一的得人自興。是玩他必，高三易？"
  		],
  		[
  		 "這是一段問題，這是一段問題的敘述問題的敘述這是一段問題的敘述",
       "可女點發！外的食是了了狀片後過的下件得。對傳今媽謝一……條舞是智麼止不，一體輕消年後風或人了化講新史容道賽：起體比這顯間產？實是嗎基招他即明房日獎經的營我人立，縣向失年自叫年拉界得黨紀？當與中組術，大親計根；對像持利料造一的得人自興。是玩他必，高三易？"
  		],
  		[
       "這是一段問題的敘述，問題的敘述這是一段問題的敘述",
       "可女點發！外的食是了了狀片後過的下件得。對傳今媽謝一……條舞是智麼止不，一體輕消年後風或人了化講新史容道賽：起體比這顯間產？實是嗎基招他即明房日獎經的營我人立，縣向失年自叫年拉界得黨紀？當與中組術，大親計根；對像持利料造一的得人自興。是玩他必，高三易？"
      ],
  		[
       "這是一段問題一段問題的敘述這的敘述是一段問題的敘述",
       "可女點發！外的食是了了狀片後過的下件得。對傳今媽謝一……條舞是智麼止不，一體輕消年後風或人了化講新史容道賽：起體比這顯間產？實是嗎基招他即明房日獎經的營我人立，縣向失年自叫年拉界得黨紀？當與中組術，大親計根；對像持利料造一的得人自興。是玩他必，高三易？"
      ],
  		[
       "這是一段問題的敘述，敘述這問題的敘述問題的敘述是一段問題的敘述",
       "可女點發！外的食是了了狀片後過的下件得。對傳今媽謝一……條舞是智麼止不，一體輕消年後風或人了化講新史容道賽：起體比這顯間產？實是嗎基招他即明房日獎經的營我人立，縣向失年自叫年拉界得黨紀？當與中組術，大親計根；對像持利料造一的得人自興。是玩他必，高三易？"
      ],
  	]
  	var qList = [];
    var number = {
      position: "relative",
      top: "-1.3px"
    };
  	for(var i = 0; i < qContent.length; i++){
  		qList.push(
  		  <div className="relative" key={i}>
  		  	<div className="collapsibleCircle absolute z1 white flex justify-center items-center f4 fw6">
            <p style={number}>{i+1}</p>
          </div>
	  	    <button className="collapsible f4-ns f5 lh-copy fw4 color-content o-80">{qContent[i][0]}</button>
			<div className="answers">
			  <p className="lh-copy f5-ns f6 fw3 color-content2">{qContent[i][1]}</p>
			</div>
		  </div>
  		)
  	}

    return (
      <section id={gData["sections"][8]} style={sectionStyle}>
      	<div className="content ph4-ns ph2 mw56rem center">
      	  <Header title={"常見問題"} color="#4C5B7F" margin={true}/>
      	  <div>
      	  	{qList}
      	  </div>
      	</div>
      </section>
    );
  }
}

export default Faq;
