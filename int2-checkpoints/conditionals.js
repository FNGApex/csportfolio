/* global draw ellipse rect p Proccesing processing width height size fill line background random delay framerate*/
var sketch = function(processing) {with(processing) {size(700, 700);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//Definitons


var traceList = Array();
background(180,180,180);


//Non Draw function should start here

/*global traceList*/
mousePressed = function(){
    
    var traceList = createPlane();
};



var createPlane = function(){
    var list = Array();
    for (var i_ = 0; i_ <21 ; i_++)
    var d = random(300); // Diameter of circle
    var x = random(700-d); // X-pos
    var y = random(700-d); // Y-pos
    list[i_]=d,x,y;
    return list;
};


/*global traceList*/
var updateplane = function(traceList){
    for (var i__ = 0; i__<21; i__++ ) {
        ellipse(traceList[i__][0],traceList[i__][1],traceList[i__][2]); 
    }
    raytrace(traceList);
};
/*global mouseX mouseY*/
var raytrace = function(){
    for (var i___ = 0; i___<21; i___++){
        line(mouseX,mouseY,traceList[i___][1],traceList[i___][2]);
    }
};


draw = function() {
    updateplane(traceList);
};



}};var p = new Processing(document.getElementById("output-canvas"), sketch);