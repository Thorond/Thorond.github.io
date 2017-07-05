var flècheMonté = document.querySelector(".flècheRemonté");
var section = document.querySelector("section");
var remonte = false;
var inter ;


section.addEventListener("click", function(){
	if ( remonte ) {
		clearInterval(inter);
		remonte = false ;
	}
});

flècheMonté.addEventListener("click", function() { 
	remonte = true;
	inter = setInterval("remonté()",1);
});

function remonté(){
	if ( remonte ) {
		document.body.scrollTop = document.body.scrollTop - 3 ;
	}
	if ( document.body.scrollTop < 1 ){
		remonte = false ;
		clearInterval( inter );
	}
}

flècheMonté.addEventListener("mouseover", function(){ 
	flècheMonté.style.backgroundColor = "#353535 ";
});
flècheMonté.addEventListener("mouseout", function(){ 
	flècheMonté.style.backgroundColor = "transparent ";
});


//  *********************************************************

var flècheDroite = document.querySelector(".flècheDroite");
var flècheGauche = document.querySelector(".flècheGauche");
var slide = document.querySelector("#slider-list");


flècheDroite.addEventListener("mouseover", function(){ 
	flècheDroite.style.backgroundColor = "#353535 ";
});
flècheGauche.addEventListener("mouseover", function(){ 
	flècheGauche.style.backgroundColor = "#353535 ";
});
flècheDroite.addEventListener("mouseout", function(){ 
	flècheDroite.style.backgroundColor = "transparent ";
});
flècheGauche.addEventListener("mouseout", function(){ 
	flècheGauche.style.backgroundColor = "transparent ";
});

flècheDroite.addEventListener("click", function(){
	slide.style.animationDuration = "0s";
	if ( slide.style.marginLeft == "0px" || slide.style.marginLeft == "" ) {
		slide.style.marginLeft = "-1519px" ; 
	} else if (slide.style.marginLeft == "-1519px"  ) {
		slide.style.marginLeft = "-3038px" ; 
	} else if (slide.style.marginLeft == "-3038px"  ) {
		slide.style.marginLeft = "0px" ; 
	}

});

flècheGauche.addEventListener("click", function(){
	
	slide.style.animationDuration = "0s";
	
	if ( slide.style.marginLeft == "-3038px" || slide.style.marginLeft == "" ) {
		slide.style.marginLeft = "-1519px" ; 
	} else if (slide.style.marginLeft == "-1519px"  ) {
		slide.style.marginLeft = "0px" ; 
	} else if ( slide.style.marginLeft == "0px"  ) {
		slide.style.marginLeft = "-3038px" ; 
	}

});

slide.addEventListener("mouseout" , function(){
	slide.style.marginLeft = "0px" ;
	slide.style.animationDuration = "20s";
});




//  *********************************************************



var tailleSlide = document.querySelector(".slider");
var resolutionClient = document.body.clientWidth;

var tailleEnPx = resolutionClient.toString() + "px"

tailleSlide.style.width = tailleEnPx ;
