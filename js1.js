
var resolutionClient = document.body.clientWidth;
var divCercleMenu = document.querySelectorAll(".divCercleMenu");
var cercleMenu = document.querySelectorAll(".cercleMenu"); 



// CERCLE HAUT

var cercleMenuHaut = document.querySelector(".cercleMenuHaut");
var positionXCercleHaut = ( resolutionClient - cercleMenu[0].offsetWidth ) / 2 ;
cercleMenuHaut.style.left = positionXCercleHaut.toString() + "px" ;
var positionYCercleHaut = ( resolutionClient * 20/100 - cercleMenu[0].offsetHeight ) / 2 ;
cercleMenuHaut.style.top = positionYCercleHaut.toString() + "px" ;


$(cercleMenu[0]).on('mouseenter', function() {
    this.iid = setInterval(function(){
    	grossissementCercles(divCercleMenu[0], cercleMenu[0])
    	positionnementXCercles(positionXCercleHaut, 1 , cercleMenuHaut, cercleMenu[0])
    	positionnementYCercles(positionYCercleHaut, 20/100 , cercleMenuHaut, cercleMenu[0])
    	}, 1);
    
}).on('mouseleave', function(){
	rétrécissementCercles(divCercleMenu[0], cercleMenu[0])
    positionnementXCercles(positionXCercleHaut, 1 , cercleMenuHaut, cercleMenu[0])
    positionnementYCercles(positionYCercleHaut, 20/100 , cercleMenuHaut, cercleMenu[0])
    this.iid && clearInterval(this.iid);
});

$(cercleMenu[0]).load("./Aeronefs.html"
);


// CERCLE HAUT GAUCHE

var cercleMenuHautGau = document.querySelector(".cercleMenuHautGau");
var positionXCercleHautGau = ( resolutionClient * 65/100 - cercleMenu[1].offsetWidth ) / 2 ;
cercleMenuHautGau.style.left = positionXCercleHautGau.toString() + "px" ;
var positionYCercleHautGau = ( resolutionClient * 40/100 - cercleMenu[1].offsetHeight ) / 2 ;
cercleMenuHautGau.style.top = positionYCercleHautGau.toString() + "px" ;

$(cercleMenu[1]).on('mouseenter', function() {
    this.iid = setInterval(function(){
    	grossissementCercles(divCercleMenu[1], cercleMenu[1])
    	positionnementXCercles(positionXCercleHautGau, 65/100  , cercleMenuHautGau, cercleMenu[1])
    	positionnementYCercles(positionYCercleHautGau, 40/100 , cercleMenuHautGau, cercleMenu[1])
    	}, 1);
    
}).on('mouseleave', function(){
	rétrécissementCercles(divCercleMenu[1], cercleMenu[1])
    positionnementXCercles(positionXCercleHautGau, 65/100  , cercleMenuHautGau, cercleMenu[1] )
    positionnementYCercles(positionYCercleHautGau, 40/100 , cercleMenuHautGau, cercleMenu[1])
    this.iid && clearInterval(this.iid);
});


// CERCLE HAUT DROITE

var cercleMenuHautDroi = document.querySelector(".cercleMenuHautDroi");
var positionXCercleHautDroi = ( resolutionClient * (200-65)/100 - cercleMenu[2].offsetWidth ) / 2 ;
cercleMenuHautDroi.style.left = positionXCercleHautDroi.toString() + "px" ;
var positionYCercleHautDroi = ( resolutionClient * 40/100 - cercleMenu[2].offsetHeight ) / 2 ;
cercleMenuHautDroi.style.top = positionYCercleHautDroi.toString() + "px" ;

$(cercleMenu[2]).on('mouseenter', function() {
    this.iid = setInterval(function(){
    	grossissementCercles(divCercleMenu[2], cercleMenu[2])
    	positionnementXCercles(positionXCercleHautDroi, (200-65)/100 , cercleMenuHautDroi, cercleMenu[2])
    	positionnementYCercles(positionYCercleHautDroi, 40/100 , cercleMenuHautDroi, cercleMenu[2])
    	}, 1);
    
}).on('mouseleave', function(){
	rétrécissementCercles(divCercleMenu[2], cercleMenu[2])
    positionnementXCercles(positionXCercleHautDroi, (200-65)/100 , cercleMenuHautDroi, cercleMenu[2] )
    positionnementYCercles(positionYCercleHautDroi, 40/100 , cercleMenuHautDroi, cercleMenu[2])
    this.iid && clearInterval(this.iid);
});


// CERCLE BAS GAUCHE

var cercleMenuBasGau = document.querySelector(".cercleMenuBasGau");
var positionXCercleBasGau = ( resolutionClient * 80/100 - cercleMenu[3].offsetWidth ) / 2 ;
cercleMenuBasGau.style.left = positionXCercleBasGau.toString() + "px" ;
var positionYCercleBasGau = ( resolutionClient * 73/100 - cercleMenu[3].offsetHeight ) / 2 ;
cercleMenuBasGau.style.top = positionYCercleBasGau.toString() + "px" ;

$(cercleMenu[3]).on('mouseenter', function() {
    this.iid = setInterval(function(){
    	grossissementCercles(divCercleMenu[3], cercleMenu[3])
    	positionnementXCercles(positionXCercleBasGau, 80/100 , cercleMenuBasGau, cercleMenu[3])
    	positionnementYCercles(positionYCercleBasGau, 73/100 , cercleMenuBasGau, cercleMenu[3])
    	}, 1);
    
}).on('mouseleave', function(){
	rétrécissementCercles(divCercleMenu[3], cercleMenu[3])
    positionnementXCercles(positionXCercleBasGau, 80/100 , cercleMenuBasGau, cercleMenu[3] )
    positionnementYCercles(positionYCercleBasGau, 73/100 , cercleMenuBasGau, cercleMenu[3])
    this.iid && clearInterval(this.iid);
});


// CERCLE BAS DROITE

var cercleMenuBasDroi = document.querySelector(".cercleMenuBasDroi");
var positionXCercleBasDroi = ( resolutionClient * (200-80)/100 - cercleMenu[4].offsetWidth ) / 2 ;
cercleMenuBasDroi.style.left = positionXCercleBasDroi.toString() + "px" ;
var positionYCercleBasDroi = ( resolutionClient * 73/100 - cercleMenu[4].offsetHeight ) / 2 ;
cercleMenuBasDroi.style.top = positionYCercleBasDroi.toString() + "px" ;

$(cercleMenu[4]).on('mouseenter', function() {
    this.iid = setInterval(function(){
    	grossissementCercles(divCercleMenu[4], cercleMenu[4])
    	positionnementXCercles(positionXCercleBasDroi, (200-80)/100 , cercleMenuBasDroi, cercleMenu[4])
    	positionnementYCercles(positionYCercleBasDroi, 73/100 , cercleMenuBasDroi, cercleMenu[4])
    	}, 1);
    
}).on('mouseleave', function(){
	rétrécissementCercles(divCercleMenu[4], cercleMenu[4])
    positionnementXCercles(positionXCercleBasDroi, (200-80)/100 , cercleMenuBasDroi, cercleMenu[4] )
    positionnementYCercles(positionYCercleBasDroi, 73/100 , cercleMenuBasDroi, cercleMenu[4])
    this.iid && clearInterval(this.iid);
});

// TITRES MENU

var titreMenu = document.querySelector(".titreMenu");
titreMenu.style.left = positionXCercleHaut.toString() + "px" ;
var positionYTitre = positionYCercleHautGau + 3/100 * resolutionClient ;
titreMenu.style.top = positionYTitre.toString() + "px" ;
var titrePrésent = false;

function réécritureTitres(cercles){
	if ( cercles.title == "Listes des aeronefs de l'AA"){
		titreMenu.textContent = "Les aeronefs de l'AA" ;
	} else if (cercles.title == "Positions des BAs" ){
		titreMenu.textContent = "Les positions des BAs" ;
	} else if (cercles.title =="Liste des BAs"){
		titreMenu.textContent = "Liste des BAs" ;
	}
}


// FONCTIONS 

function positionnementXCercles(positionX, x ,placementX, cercles){
	positionX = ( resolutionClient * x - cercles.offsetWidth ) / 2 ;
	placementX.style.left = positionX.toString() + "px" ; 
}
function positionnementYCercles(positionY, y ,placementY, cercles){
	positionY = ( resolutionClient * y - cercles.offsetHeight ) / 2 ;
	placementY.style.top = positionY.toString() + "px" ; 
}

var r=10;
function grossissementCercles(divCercle, cercles){
	if ( r < 22 ) {
        divCercle.style.width = r.toString() + "%";
		r+=0.1;      
		if(r > 14 && r <18){
			if ( ! titrePrésent ) {
				réécritureTitres(cercles);
				titreMenu.style.color = "black" ;
				titrePrésent = true ;
			}
		}   
	}
}



function rétrécissementCercles(divCercle, cercles){
	r=10;
	divCercle.style.width = r.toString() + "%";
	titreMenu.style.color = "transparent" ;
	titrePrésent = false ;
}