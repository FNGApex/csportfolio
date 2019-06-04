var inputcalc = document.getElementById("inputcalc");
var outputcalc = document.getElementById("outputcalc");

function calculate(){
    var input;
    var output;
    var num1;
    var num2;
    var currentElem;
    var currentSign;
    input = inputcalc.value;
    num1 = 0;
    num2 = 0;
    currentElem = 0;
    currentSign = "";
    output = 0;
    for(var i=0; i< input.length; i++){
        currentElem = input[i];
        if(currentSign === ''){
            if (!isNaN(currentElem)|| currentElem == "." ){
                console.log("Current Element", currentElem, "I=", i);
                num1 += currentElem;
            }else{
                currentSign = currentElem;
                console.log("Current Sign found", currentSign, "I=", i);
            }// end of else
        //end of 2nd if
        }else{
            num2 += currentElem;
            console.log("Current Element", currentElem, "I=", i);
        }//emd of else
            
    }//End of For Loop
    console.log("Finishing up");
    console.log("Num1=", num1, "Num2=", num2);
    num1 = +num1;
    num2 = +num2;
    if(currentSign === "+"){
        output = num1+num2;
    }else if(currentSign === "-"){
        output = num1-num2;
    }else if(currentSign === '/'){
        if(num2 === 0){
            output = "NO STOP RIGHT THERE THIS IS RUSSIAN CALCLUATOR NOOOOOOOOOOOOO.... *black hole noises*";
        }else{
            output= num1/num2;
        }
    }else if(currentSign === '*'){
        output = num1*num2 ;
    }
    outputcalc.innerHTML = output;
}
inputcalc.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        calculate();
    }
});
