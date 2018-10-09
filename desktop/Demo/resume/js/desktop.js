$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor:['#FF9999','#CC99CC','#00B2B2','#FFCC99','#996666'], //控制每个section的背景颜色
		css3: true,
		scrolllingSpeed:700,
		anchors:['page1','page2','page3','page4'],
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
	});
});