document.getElementById("ad").addEventListener("mouseover", moveAd);
function moveAd(){
    var elem = document.getElementById("ad");
    var xpos = 0;
    var ypos = 0;
    xpos = Math.random()* 95 + "%";
    ypos = Math.random()* 95 + "%";
    //console.log(ypos);
    //console.log(xpos);
    elem.style.top = xpos; 
    elem.style.left = ypos; 
}