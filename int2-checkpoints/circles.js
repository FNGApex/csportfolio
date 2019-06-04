/* global draw ellipse rect p processing width height size fill background */
var sketch = function(processing) {with(processing) {size(700, 700);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

z
draw = function() {
    yPos++; //Max is 700
    xPos++; //Max is 700
    
    // line of circles
    if(xPos% 3 == 0 && xPos <= 350){
        background();
        fill(255,125,0);
        ellipse(  xPos,  350,    10, 10);
        ellipse(  350,   yPos,   10, 10);
        ellipse(  xPos,  yPos,   10, 10);
        ellipse( -xPos,  yPos,   10, 10);
        ellipse(  xPos, -yPos,   10, 10);
    }else{
        ellipse(  xPos,  350,    10, 10);
        ellipse(  350,   yPos,   10, 10);
        ellipse(  xPos,  yPos,   10, 10);
        ellipse(  xPos, -yPos,   10, 10);
        ellipse(  xPos,  yPos,   10, 10);
    }
    // Do not edit code bellow this line
    if(xPos==700){
        xPos = 0;
        yPos = 0;
    }
}; 
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
