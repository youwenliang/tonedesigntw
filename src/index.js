import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import $ from 'jquery';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

$(document).ready(function(){
	// Show hidden div on scroll
	$('.hide').each( function(i){
		$(this).addClass('none');
	});
	$(window).scroll( function(){
	  $('.hide').each( function(i){
		var bottom_of_object = $(this).offset().top + $(this).outerHeight()/4;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var $this = $(this);
		if( bottom_of_window > bottom_of_object ){
			$this.removeClass('none');
		}
	  });
	});
});
