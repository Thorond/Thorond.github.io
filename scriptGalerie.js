var isIE = document.all?true:false;
var html = document.querySelector("html");
var el = document.querySelector("#transp");
var imageTransp = document.querySelector(".imageTransp");
var grilleAgrandissement = document.querySelector(".grilleAgrandissement");
var galerie1 = document.querySelectorAll(".galerie-1");

var vingtPourCent = 20 * document.body.clientHeight / 100 ;
console.log(Math.round(vingtPourCent));

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
	grilleAgrandissement.style.width = "50%";
	grilleAgrandissement.style.height = "50%";

	var positionGrilleAgrandissement = document.body.scrollTop + vingtPourCent ;
	grilleAgrandissement.style.marginTop = positionGrilleAgrandissement.toString() + "px";

}

el.addEventListener("click", function(){
	el.style.height = "0px";
	el.style.width = "0%";

	html.style.overflowY = "visible" ;

});




