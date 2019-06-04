/* global draw ellipse rect p processing width height size fill line background random delay framerate*/
var sketch = function(processing) {with(processing) {size(700, 700);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//Definitons
var x = 0;
var y = 0;
var x2 =0;
var y2 =0;
var val1 = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;
//Non Draw function should start here
background(180,180,180);
var drawStuff = function(x,y,x2,y2,val1,val2,val3,val4){
    for(var i = 0; i<31; i++){
    x= mouseX;
    y= mouseY;
    val1= i*random(23);
    val2= i*random(23);
    background(random(255),random(255),random(255));
    fill(x*y,val1,val2);
    ellipse(x,y,val1,val2);
    for(var j = 0; j<31; j++){
    //line(x1, y1, x2, y2)
    x2= j*random(23);
    y2= j*random(23);
    val3= j*random(23);
    val4= j*random(23);
    fill(random(255),random(255),random(255));
    ellipse(x2,y2,val3,val4);
    line(x,y,x2,y2);
    }
    }
};
/*global mousePressed*/
mousePressed = function(){
    drawStuff(x,y,x2,y2,val1,val2,val3,val4);
};
draw = function() {};

}};var p = new Processing(document.getElementById("output-canvas"), sketch);
