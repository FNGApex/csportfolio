/* global draw ellipse rect p Proccesing processing width height size fill line background random */
var sketch = function(processing) {with(processing) {size(1336, 768);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//Definitons
background(180,180,180);
//Non Draw function should start here
var traceList = createPlane();
 
mousePressed = function(){
     traceList = createPlane();

};
function createPlane(){
    var list = [];
    for (var i = 0; i <101 ; i++){
    var d = Math.ceil(Math.sqrt(random(300)))*5; // Diameter of circle
    var x = random(1336-d); // X-pos
    var y = random(768-d); // Y-pos
    var c = [random(255),random(255),random(255)];
    list.push([x,y,d,c]);
    }
      return list;
};
var updatePlane = function(traceList){
    background(180,180,180);
    for (var i__ = 0; i__<101; i__++ ) {
        // console.log(traceList[i__]);
        fill(traceList[i__][3][0],traceList[i__][3][1],traceList[i__][3][2]);
        ellipse(traceList[i__][0],traceList[i__][1],traceList[i__][2],traceList[i__][2]); 
    }
};
/*global mouseX mouseY*/
var rayTrace = function(traceList){
    for (var i___ = 0; i___<101; i___++){
        line(mouseX,mouseY,traceList[i___][0],traceList[i___][1]);
    }
};
var moveCircles = function(traceList){
    for (var i= 0; i<101;i++){
        if(random(2)>1){
            traceList[i][0] += random(3)*-1;
        }else{
            traceList[i][0] += random(3);
        }
        if(random(2)>1){
            traceList[i][1] += random(3)*-1;
        }else{
            traceList[i][1] += random(3);
        }
    }
};
draw = function() {
    moveCircles(traceList);
    updatePlane(traceList);
    rayTrace(traceList);
};

}};var p = new Processing(document.getElementById("output-canvas"), sketch);