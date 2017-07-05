var prestations = document.querySelectorAll(".casePrestation");
var resolutionClient = document.body.clientWidth;
var body = document.body ;


if ( resolutionClient > 975 ){
	for ( j = 0 ; j < prestations.length ; j++ ) { 
		var temp = prestations[j].querySelector("ul");
		if ( temp !== null ) {
			temp.style.listStyleType = "none";
		}
		temp = prestations[j].querySelectorAll(".listePrestations");
		if ( temp !== null ) {

			for ( k = 0 ; k < temp.length ; k++) { temp[k].style.color = "transparent";}
			
		}
	}

	for ( i = 0 ; i < prestations.length ; i++ ) { 
	    prestations[i].addEventListener("mouseover", affichageDeLaPrestation );
	}
} else {
	mettreEcriture(prestations);
}

function enleverEcriture (pres) {
	for ( j = 0 ; j < pres.length ; j++ ) { 
		pres[j].classList.remove("col-md-4") ;
		pres[j].classList.add("col-md-1") ;
		pres[j].classList.remove("écritureCasePrestation") ;
		pres[j].classList.add("écritureTransparenteCasePrestation") ;
		pres[j].querySelector(".paragraphe").classList.remove("paragrapheCasePrestation");
		var temp = pres[j].querySelector("ul");
		if ( temp !== null ) {
			temp.style.listStyleType = "none";
		}
		temp = pres[j].querySelectorAll(".listePrestations");
		if ( temp !== null ) {

			for ( k = 0 ; k < temp.length ; k++) { temp[k].style.color = "transparent";}
			
		}
	}
}

function mettreEcriture ( pres) {
	for ( j = 0 ; j < pres.length ; j++ ) { 
		pres[j].classList.add("écritureCasePrestation") ;
		pres[j].classList.remove("écritureTransparenteCasePrestation") ;
		pres[j].querySelector(".paragraphe").classList.add("paragrapheCasePrestation");
		var temp = pres[j].querySelector("ul");
		if ( temp !== null ) {
			temp.style.listStyleType = "square";
		}
		temp = pres[j].querySelectorAll(".listePrestations");
		if ( temp !== null ) {

			for ( k = 0 ; k < temp.length ; k++) { temp[k].style.color = "white";}
			
		}
	}
}

function écritureSelonRésolution () {
	if ( resolutionClient > 975 ){
		enleverEcriture(prestations);
		prestations[0].classList.remove("col-md-1"); 
	    prestations[0].classList.add("col-md-4");
	    for ( i = 0 ; i < prestations.length ; i++ ) { 
		    prestations[i].addEventListener("mouseover", affichageDeLaPrestation );
		}
	} else {
		mettreEcriture(prestations);
		for ( i = 0 ; i < prestations.length ; i++ ) { 
		    prestations[i].removeEventListener("mouseover", affichageDeLaPrestation );
		}
	}
}

function affichageDeLaPrestation(){
	enleverEcriture(prestations);
	    	
    this.classList.remove("col-md-1"); 
    this.classList.add("col-md-4");
	this.classList.add("écritureCasePrestation") ;
	this.classList.remove("écritureTransparenteCasePrestation") ;
	this.querySelector(".paragraphe").classList.add("paragrapheCasePrestation");
	var temp = this.querySelector("ul");
	if ( temp !== null ) {
		temp.style.listStyleType = "square";
	}
	temp = this.querySelectorAll(".listePrestations");
	if ( temp !== null ) {
		for ( k = 0 ; k < temp.length ; k++) { temp[k].style.color = "white";}
	}
}


body.addEventListener("mouseover",function() { 
	if ( document.body.clientWidth !== resolutionClient ) {
		resolutionClient = document.body.clientWidth;
		écritureSelonRésolution();
	}
});


