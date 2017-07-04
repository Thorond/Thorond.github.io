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


//  *********************************************************

var flècheDroite = document.querySelector(".flècheDroite");
var flècheGauche = document.querySelector(".flècheGauche");
var slide = document.querySelector("#slider-list");

flècheDroite.addEventListener("click", function(){
	slide.style.animationDuration = "0s";
	if ( slide.style.marginLeft == "0px" || slide.style.marginLeft == "" ) {
		slide.style.marginLeft = "-1519px" ; 
	} else if (slide.style.marginLeft == "-1519px"  ) {
		slide.style.marginLeft = "-3038px" ; 
	} else if (slide.style.marginLeft == "-3038px"  ) {
		slide.style.marginLeft = "0px" ; 
	}

	// if ( slide.style.marginLeft == "0px" ){
	// 	slide.style.animationDuration = "20s";
	// }
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

	// if ( slide.style.marginLeft == "0px" ){
	// 	slide.style.animationDuration = "20s";
	// }
});

slide.addEventListener("mouseout" , function(){
	slide.style.marginLeft = "0px" ;
	slide.style.animationDuration = "20s";
});

