var html = document.querySelector("html");
var el = document.querySelector("#transp");
var imageTransp = document.querySelector(".imageTransp");
var grilleAgrandissement = document.querySelector(".grilleAgrandissement");
var galerie1 = document.querySelectorAll(".galerie-1");
var flècheGauche = document.querySelector(".flèchesAgrandissementGauche");
var flècheDroite = document.querySelector(".flèchesAgrandissementDroite");

var galerie ;

var vingtPourCent = 20 * document.body.clientHeight / 100 ;
var quinzePourCent = 15 * document.body.clientHeight / 100 ;
var widthAgrandissement = 60 * document.body.clientWidth / 100;
var heightAgrandissement = 60 * document.body.clientHeight / 100;

for ( i = 0 ; i < galerie1.length ; i++ ) { 
    galerie1[i].addEventListener("click", voiler );
}

function voiler() {

	if ( this.title == "Galerie-1" ){
		galerie = 1 ;
	}

	var hauteur;
	
	if (document.body.clientHeight ) {	
		hauteur = document.body.clientHeight ;
	}

	if (el) {
		el.style.height = hauteur + "px";
		el.style.width = "100%";
	}

	html.style.overflowY = "hidden" ;

	// imageTransp.src = this.src ;
	imageTransp.src = "images/ConceptionAZ/" + this.alt.toString() + ".JPG";
	imageTransp.name = this.alt.toString() ; 
	grilleAgrandissement.style.width = widthAgrandissement.toString() + "px" ;
	grilleAgrandissement.style.height = heightAgrandissement.toString() + "px"  ;

	// pour remettre les images sur le coté dans le bon sens 
	if ( this.name && this.name == "renversé"){
		grilleAgrandissement.style.transform = "rotate(90deg)";
		var positionGrilleAgrandissement = ( document.body.scrollTop || document.documentElement.scrollTop ) + quinzePourCent ;
	} else {
		var positionGrilleAgrandissement = ( document.body.scrollTop || document.documentElement.scrollTop ) + vingtPourCent ;
	}

	// pour afficher l'image sur l'écran de l'utilisateur au bon endroit
	grilleAgrandissement.style.marginTop = positionGrilleAgrandissement.toString() + "px";


	// les flèches 

	var positionFlècheTop = grilleAgrandissement.offsetTop + ( grilleAgrandissement.offsetHeight / 2 ) ;
	var positionFlècheGaucheLeft = grilleAgrandissement.offsetLeft - 20 ;
	var positionFlècheDroiteLeft = grilleAgrandissement.offsetLeft +  grilleAgrandissement.offsetWidth  - 20 ;

	flècheGauche.style.width = "38px";
	flècheGauche.style.height = "50px";
	flècheGauche.style.top = positionFlècheTop.toString() + "px";
	flècheGauche.style.left = positionFlècheGaucheLeft.toString() + "px";

	flècheDroite.style.width = "38px";
	flècheDroite.style.height = "50px";
	flècheDroite.style.top = positionFlècheTop.toString() + "px";
	flècheDroite.style.left = positionFlècheDroiteLeft.toString() + "px";




}


// pour enlever l'agrandissement 
el.addEventListener("click", function(){
	el.style.height = "0px";
	el.style.width = "0px";

	html.style.overflowY = "visible" ;

	grilleAgrandissement.style.width = "0px" ;
	grilleAgrandissement.style.height = "0px"  ;
	grilleAgrandissement.style.marginTop = "0px";
	grilleAgrandissement.style.transform = "rotate(0deg)";


	flècheGauche.style.width = "0px";
	flècheGauche.style.height = "0px";
	flècheDroite.style.width = "0px";
	flècheDroite.style.height = "0px";
});


// pour la couleur de fond des flèches
flècheDroite.addEventListener("mouseover", function(){ 
	flècheDroite.querySelector("img").style.backgroundColor = "#353535 ";
});
flècheGauche.addEventListener("mouseover", function(){ 
	flècheGauche.querySelector("img").style.backgroundColor = "#353535 ";
});
flècheDroite.addEventListener("mouseout", function(){ 
	flècheDroite.querySelector("img").style.backgroundColor = "transparent ";
});
flècheGauche.addEventListener("mouseout", function(){ 
	flècheGauche.querySelector("img").style.backgroundColor = "transparent ";
});

// pour changer de photo dans une galerie
flècheDroite.addEventListener("click", function(){ 
	if ( galerie == 1){
		if ( imageTransp.name == "conceptPhoto1"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto2.JPG";
			imageTransp.name = "conceptPhoto2" ; 
		} else if ( imageTransp.name == "conceptPhoto2"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto3.JPG";
			imageTransp.name = "conceptPhoto3" ; 
		} else if ( imageTransp.name == "conceptPhoto3"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto4.JPG";
			imageTransp.name = "conceptPhoto4" ; 
		} else if ( imageTransp.name == "conceptPhoto4"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto5.JPG";
			imageTransp.name = "conceptPhoto5" ; 
		} else if ( imageTransp.name == "conceptPhoto5"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto1.JPG";
			imageTransp.name = "conceptPhoto1" ; 
		}
	}
});
flècheGauche.addEventListener("click", function(){ 
	if ( galerie == 1){
		if ( imageTransp.name == "conceptPhoto1"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto5.JPG";
			imageTransp.name = "conceptPhoto5" ; 
		} else if ( imageTransp.name == "conceptPhoto5"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto4.JPG";
			imageTransp.name = "conceptPhoto4" ; 
		} else if ( imageTransp.name == "conceptPhoto4"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto3.JPG";
			imageTransp.name = "conceptPhoto3" ; 
		} else if ( imageTransp.name == "conceptPhoto3"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto2.JPG";
			imageTransp.name = "conceptPhoto2" ; 
		} else if ( imageTransp.name == "conceptPhoto2"){
			imageTransp.src = "images/ConceptionAZ/conceptPhoto1.JPG";
			imageTransp.name = "conceptPhoto1" ; 
		}
	}
});

