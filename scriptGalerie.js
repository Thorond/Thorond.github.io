var isIE = document.all?true:false;
var html = document.querySelector("html");
var el = document.querySelector("#transp");
var imageTransp = document.querySelector(".imageTransp");
var grilleAgrandissement = document.querySelector(".grilleAgrandissement");
var galerie1 = document.querySelectorAll(".galerie-1");

var vingtPourCent = 20 * document.body.clientHeight / 100 ;
var quinzePourCent = 15 * document.body.clientHeight / 100 ;
var widthAgrandissement = 60 * document.body.clientWidth / 100;
var heightAgrandissement = 60 * document.body.clientHeight / 100;

for ( i = 0 ; i < galerie1.length ; i++ ) { 
    galerie1[i].addEventListener("click", voiler );
}

function voiler() {

	var hauteur;
	
	if (document.body.clientHeight ) {	
		hauteur = document.body.clientHeight ;
	}

	if (el) {
		el.style.height = hauteur + "px";
		el.style.width = "100%";
	}

	html.style.overflowY = "hidden" ;

	imageTransp.src = this.src ;
	grilleAgrandissement.style.width = widthAgrandissement.toString() + "px" ;
	grilleAgrandissement.style.height = heightAgrandissement.toString() + "px"  ;

	if ( this.name && this.name == "renversé"){
		grilleAgrandissement.style.transform = "rotate(90deg)";
		var positionGrilleAgrandissement = ( document.body.scrollTop || document.documentElement.scrollTop ) + quinzePourCent ;
	} else {
		var positionGrilleAgrandissement = ( document.body.scrollTop || document.documentElement.scrollTop ) + vingtPourCent ;
	}

	grilleAgrandissement.style.marginTop = positionGrilleAgrandissement.toString() + "px";

}

el.addEventListener("click", function(){
	el.style.height = "0px";
	el.style.width = "0px";

	html.style.overflowY = "visible" ;

	grilleAgrandissement.style.width = "0px" ;
	grilleAgrandissement.style.height = "0px"  ;
	grilleAgrandissement.style.marginTop = "0px";
	grilleAgrandissement.style.transform = "rotate(0deg)";

});




