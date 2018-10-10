$(document).ready(function() {
	$('#fullpage').fullpage({
		licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
		sectionsColor:['#FF9966','#5c7ff1','#00B2B2','#FFCC99','#CC9966'], //控制每个section的背景颜色
		css3: true,
		scrolllingSpeed:700,
		//anchors:['page1','page2','page3','page4'],
		lockAnchors:false,
		loopTop:false,
		loopHorizontal:false,
		autoScrolling:true,
		scrollBar:false,
		menu:".menu",
		keyboardScrolling:true,
		navigation:true,
		navigationColor:'#fff', //项目导航的颜色
		slidesNavigation:true,
		loopHorizontal: true,
		controlArrows:false,
		

		onLeave: function(origin, destination, direction){
			if(destination.index == 2){
				document.getElementById('page3Img1').classList.add('page3Img1Animation');
				document.getElementById('page3Img2').classList.add('page3Img2Animation');
				document.getElementById('page3Text1').classList.add('page3Text12Animation');
				document.getElementById('page3Text2').classList.add('page3Text12Animation');
			}

			if(destination.index == 3){
				document.getElementById('page4Img1').classList.add('page4ImgAnimation');
				document.getElementById('page4Img2').classList.add('page4ImgAnimation');
				document.getElementById('page4Img3').classList.add('page4ImgAnimation');
				document.getElementById('page4Img4').classList.add('page4ImgAnimation');
				document.getElementById('page4Img1Text').classList.add('page4Img12TextAnimation');
				document.getElementById('page4Img2Text').classList.add('page4Img12TextAnimation');
				document.getElementById('page4Img3Text').classList.add('page4Img34TextAnimation');
				document.getElementById('page4Img4Text').classList.add('page4Img34TextAnimation');
			}

			if(destination.index == 1){
				document.getElementById('page2Img').classList.add('page2ImgAnimation');
				document.getElementById('page2ImgText').classList.add('page2ImgTextAnimation');
				document.getElementById('educationbox').classList.add('educationboxAnimation');
				document.getElementById('awardbox').classList.add('awardboxAnimation');
				document.getElementById('skillbox').classList.add('skillboxAnimation');
			}
		},

		afterSlideLoad( section, origin, destination, direction){
			if(section.index == 2 && destination.index == 1){
				document.getElementById('page3Img3').classList.add('page3Img3Animation');
				document.getElementById('page3Img4').classList.add('page3Img4Animation');
				document.getElementById('page3Text3').classList.add('page3Text34Animation');
				document.getElementById('page3Text4').classList.add('page3Text34Animation');
			}
		}
		});
});

function overqq(){document.getElementById("qqlabel").style.visibility="visible";}
function overwechat(){document.getElementById("wechatlabel").style.visibility="visible";}
function overweibo(){document.getElementById("weibolabel").style.visibility="visible";}
function overgoogle(){document.getElementById("googlelabel").style.visibility="visible";}
function outqq(){document.getElementById("qqlabel").style.visibility="hidden";}
function outwechat(){document.getElementById("wechatlabel").style.visibility="hidden";}
function outweibo(){document.getElementById("weibolabel").style.visibility="hidden";}
function outgoogle(){document.getElementById("googlelabel").style.visibility="hidden";}