var inputsin = document.getElementById("inputsin");
var outputsin = document.getElementById("outputsin");
function calcsin(){
    var num = 0;
    var input = inputsin.value;
    var output = 0;
    var operation   = '';
    for(var i= 0; i<3; i++){
        console.log(i);
        operation+= input[i];
        console.log(input[i]);
    }
    console.log(operation);
    for(i = 3; i< input.length; i++){
    if(!isNaN(input[i])){
     console.log(i);
     num += input[i];
     console.log(num);
    }
    }
    if(operation =="sin"){
        output = Math.sin(num);
    }else if(operation =="cos"){
        output = Math.cos(num);
    }else if(operation =="tan"){
        output = Math.tan(num);
    }
    outputsin.innerHTML = output;
}
inputsin.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        calcsin();
    }
});

