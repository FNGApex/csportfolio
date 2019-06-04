/* global draw ellipse rect p Proccesing processing width height size fill line background random mouseX mouseY*/
var sketch = function(processing) {with(processing) {size(1336, 768);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//Definitons
// Variable Definiton
background(180,180,180);
var tracelist = [];
var xPos;
var yPos;
var d;
var amount = 0;
// adding a circle to the array
var addCircle = function(){
    amount++;
    xPos = mouseX;
    yPos = mouseY;
    d = Math.ceil(Math.sqrt(random(300)))*5;
    var r = random(255);
    var g = random(255);
    var b = random(255);
    // add a new entry to tracelist.
    tracelist.push([xPos,yPos,d,r,g,b]);
};
// Change position
var randomize = function(){
    for(var i = 0; i<amount; i++){
        if(random(3)<1.5){
        tracelist[i][0] += random(1);  
        tracelist[i][1] += random(1);
        }else{
        tracelist[i][0] -= random(1);
        tracelist[i][1] -= random(1);
        }
        
    }
    
};

//Updating the plane
var updatePlane= function(){
    // Circle that follows the mouse
    fill(55,55,0);
    ellipse(mouseX,mouseY,50,50);
    for(var i = 0; i<amount; i++){
    fill(tracelist[i][3],tracelist[i][4],tracelist[i][5]);
    ellipse(tracelist[i][0],tracelist[i][1],tracelist[i][2],tracelist[i][2]);
    //console.log(tracelist[i][0],tracelist[i][1],tracelist[i][2],i);
    }
};

// Trace from circle to cirlce
var rayTrace = function(){
    // Delete old tracing
    background(180,180,180);
    // From circle to old circle
    for(var i = 1; i<=amount-1;i++){
        line(tracelist[i][0],tracelist[i][1],tracelist[i-1][0],tracelist[i-1][1]);
        // From each circle to each other circle
        for(var j =0 ; j< amount;j++){
            line(tracelist[i][0],tracelist[i][1],tracelist[j][0],tracelist[j][1]);}
    }
    // From last circle to mouse
    line(tracelist[tracelist.length-1][0],tracelist[tracelist.length-1][1],mouseX,mouseY);
    
};

//if Mouse is pressed add a circle
var mousePressed = function(){
    addCircle();
    console.log(amount);
    
};
// Reset the screen
/* global keyPressed*/
var keyPressed = function(){
    console.log("Key pressed");
    console.log("Reseting");
    tracelist = [];
    amount = 0;
    background(180,180,180);
};



// Draw repeats over and over again
draw = function() {
    // If a circle has been drawn
    // move them from their last location
    // Trace all circles
    // Add the circles
    if(amount>0){
        randomize();
        rayTrace();
        updatePlane();
        
    }
};


}};var p = new Processing(document.getElementById("output-canvas"), sketch);

