/* global draw ellipse rect p processing width height size fill background Processing */
var sketch = function(processing){with (processing) {size(1336, 768);background(255);

var circles ={
    xPos: 0
    ,yPos: 0
    ,number: 0
    ,radius: 10
    ,create: function(){
        ellipse(this.circles.xPos, this.circles.yPos, this.circles.radius);
    }
};

ellipse(668,384,100);
fill(0,0,0);
draw = function() {
    //circles.create();
    //ellipse(668,384,100);
    //fill(0,0,0);

    
    
};}};var p = new Processing(document.getElementById("output-canvas"), sketch);
