var myFullpage = new fullpage('#fullpage', {
	licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
	anchors: ['firstPage', 'secondPage', '3rdPage','4thpage','5thPage','6thPage'],
	sectionsColor: ['#406B8F','white','#78675E','#3BA495','#263646','#292929'],
	navigation:true,

	onLeave: function(origin, destination, direction){
		if(destination.index == 1){
			document.getElementById("page2Title1").classList.add("animated");
			document.getElementById("page2Title1").classList.add("bounceInLeft");
			document.getElementById("page2Text1").classList.add("animated");
			document.getElementById("page2Text1").classList.add("bounceInLeft");

			document.getElementById("page2Title2").classList.add("animated");
			document.getElementById("page2Title2").classList.add("bounceInRight");
			document.getElementById("page2Text2").classList.add("animated");
			document.getElementById("page2Text2").classList.add("bounceInRight");
		}

		if(origin.index == 1){
			document.getElementById("page2Title1").classList.remove("animated");
			document.getElementById("page2Title1").classList.remove("bounceInLeft");
			document.getElementById("page2Text1").classList.remove("animated");
			document.getElementById("page2Text1").classList.remove("bounceInLeft");

			document.getElementById("page2Title2").classList.remove("animated");
			document.getElementById("page2Title2").classList.remove("bounceInRight");
			document.getElementById("page2Text2").classList.remove("animated");
			document.getElementById("page2Text2").classList.remove("bounceInRight");
		}

		if(destination.index == 2){
			document.getElementById("page3Img").style.transform = "scale(0)";
			document.getElementById("page3Img").classList.add("page3ImgAnimation");
			document.getElementById("page3Title").classList.add("animated");
			document.getElementById("page3Title").classList.add("fadeInUp");
			document.getElementById("page3Text1").classList.add("animated");
			document.getElementById("page3Text1").classList.add("fadeInLeft");
			document.getElementById("page3Text2").classList.add("animated");
			document.getElementById("page3Text2").classList.add("fadeInLeft");
			document.getElementById("page3Text3").classList.add("animated");
			document.getElementById("page3Text3").classList.add("fadeInLeft");
			document.getElementById("page3Text4").classList.add("animated");
			document.getElementById("page3Text4").classList.add("fadeInLeft");

		}

		if(origin.index == 2){
			document.getElementById("page3Img").classList.remove("page3ImgAnimation");
			document.getElementById("page3Img").style.transform = "scale(1)";
			document.getElementById("page3Title").classList.remove("animated");
			document.getElementById("page3Title").classList.remove("fadeInUp");
			document.getElementById("page3Text1").classList.remove("animated");
			document.getElementById("page3Text1").classList.remove("fadeInLeft");
			document.getElementById("page3Text2").classList.remove("animated");
			document.getElementById("page3Text2").classList.remove("fadeInLeft");
			document.getElementById("page3Text3").classList.remove("animated");
			document.getElementById("page3Text3").classList.remove("fadeInLeft");
			document.getElementById("page3Text4").classList.remove("animated");
			document.getElementById("page3Text4").classList.remove("fadeInLeft");

		}

		if(destination.index == 3){
			document.getElementById("page4Img1").classList.add("animated");
			document.getElementById("page4Img1").classList.add("flipInX");
			document.getElementById("page4Img2").classList.add("animated");
			document.getElementById("page4Img2").classList.add("flipInX");

			document.getElementById("page4Title1").classList.add("animated");
			document.getElementById("page4Title1").classList.add("fadeIn");
			document.getElementById("page4Text1").classList.add("animated");
			document.getElementById("page4Text1").classList.add("fadeIn");
			document.getElementById("page4Text2").classList.add("animated");
			document.getElementById("page4Text2").classList.add("fadeIn");

			

		}

		if(destination.index == 4){
			document.getElementById("page5Title1").classList.add("animated");
			document.getElementById("page5Title1").classList.add("jackInTheBox");
			document.getElementById("page5Title2").classList.add("animated");
			document.getElementById("page5Title2").classList.add("jackInTheBox");

			document.getElementById("page5Img1").classList.add("animated");
			document.getElementById("page5Img1").classList.add("zoomIn");
			document.getElementById("page5Img2").classList.add("animated");
			document.getElementById("page5Img2").classList.add("zoomIn");
			document.getElementById("page5Img3").classList.add("animated");
			document.getElementById("page5Img3").classList.add("zoomIn");
			document.getElementById("page5Img4").classList.add("animated");
			document.getElementById("page5Img4").classList.add("zoomIn");
			document.getElementById("page5Img5").classList.add("animated");
			document.getElementById("page5Img5").classList.add("zoomIn");
			document.getElementById("page5Img6").classList.add("animated");
			document.getElementById("page5Img6").classList.add("zoomIn");

			document.getElementById("page5Label1").classList.add("animated");
			document.getElementById("page5Label1").classList.add("fadeIn");
			document.getElementById("page5Label2").classList.add("animated");
			document.getElementById("page5Label2").classList.add("fadeIn");
			document.getElementById("page5Label3").classList.add("animated");
			document.getElementById("page5Label3").classList.add("fadeIn");
			document.getElementById("page5Label4").classList.add("animated");
			document.getElementById("page5Label4").classList.add("fadeIn");
			document.getElementById("page5Label5").classList.add("animated");
			document.getElementById("page5Label5").classList.add("fadeIn");
			document.getElementById("page5Label6").classList.add("animated");
			document.getElementById("page5Label6").classList.add("fadeIn");
		}

		if(origin.index == 4){
			document.getElementById("page5Title1").classList.remove("animated");
			document.getElementById("page5Title1").classList.remove("jackInTheBox");
			document.getElementById("page5Title2").classList.remove("animated");
			document.getElementById("page5Title2").classList.remove("jackInTheBox");

			document.getElementById("page5Img1").classList.remove("animated");
			document.getElementById("page5Img1").classList.remove("zoomIn");
			document.getElementById("page5Img2").classList.remove("animated");
			document.getElementById("page5Img2").classList.remove("zoomIn");
			document.getElementById("page5Img3").classList.remove("animated");
			document.getElementById("page5Img3").classList.remove("zoomIn");
			document.getElementById("page5Img4").classList.remove("animated");
			document.getElementById("page5Img4").classList.remove("zoomIn");
			document.getElementById("page5Img5").classList.remove("animated");
			document.getElementById("page5Img5").classList.remove("zoomIn");
			document.getElementById("page5Img6").classList.remove("animated");
			document.getElementById("page5Img6").classList.remove("zoomIn");

			document.getElementById("page5Label1").classList.remove("animated");
			document.getElementById("page5Label1").classList.remove("fadeIn");
			document.getElementById("page5Label2").classList.remove("animated");
			document.getElementById("page5Label2").classList.remove("fadeIn");
			document.getElementById("page5Label3").classList.remove("animated");
			document.getElementById("page5Label3").classList.remove("fadeIn");
			document.getElementById("page5Label4").classList.remove("animated");
			document.getElementById("page5Label4").classList.remove("fadeIn");
			document.getElementById("page5Label5").classList.remove("animated");
			document.getElementById("page5Label5").classList.remove("fadeIn");
			document.getElementById("page5Label6").classList.remove("animated");
			document.getElementById("page5Label6").classList.remove("fadeIn");
		}
	},



	onSlideLeave( section, origin, destination, direction){
		if(section.index == 3 && destination.index == 1){
			document.getElementById("page4Img3").classList.add("animated");
			document.getElementById("page4Img3").classList.add("flipInX");
			document.getElementById("page4Img4").classList.add("animated");
			document.getElementById("page4Img4").classList.add("flipInX");

			document.getElementById("page4Title2").classList.add("animated");
			document.getElementById("page4Title2").classList.add("fadeIn");
			document.getElementById("page4Text3").classList.add("animated");
			document.getElementById("page4Text3").classList.add("fadeIn");
			document.getElementById("page4Text4").classList.add("animated");
			document.getElementById("page4Text4").classList.add("fadeIn");

			
		}

	},

	afterLoad: function(origin, destination, direction){
	
	}

})