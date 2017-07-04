var prestations = document.querySelectorAll(".casePrestation");


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
    prestations[i].addEventListener("mouseover",function() { 
    	for ( j = 0 ; j < prestations.length ; j++ ) { 
    		prestations[j].classList.remove("col-md-4") ;
    		prestations[j].classList.add("col-md-1") ;
    		prestations[j].classList.remove("écritureCasePrestation") ;
    		prestations[j].classList.add("écritureTransparenteCasePrestation") ;
    		prestations[j].querySelector(".paragraphe").classList.remove("paragrapheCasePrestation");
    		var temp = prestations[j].querySelector("ul");
    		if ( temp !== null ) {
    			temp.style.listStyleType = "none";
    		}
    		temp = prestations[j].querySelectorAll(".listePrestations");
    		if ( temp !== null ) {

    			for ( k = 0 ; k < temp.length ; k++) { temp[k].style.color = "transparent";}
    			
    		}
    	}
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
    });
}