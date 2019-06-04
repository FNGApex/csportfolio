//functions
function findKey(keyElement){
    if(!isNaN(keyElement.key) && keyElement.keyCode !==32 || keyElement.keyCode === 191 
    || keyElement.key === "*" || keyElement.keyCode === 8 || keyElement.key === "+" 
    || keyElement.key === "-" || keyElement.keyCode === 13 || keyElement.key === "^" 
    || keyElement.key === "."){
        if(keyElement.keyCode !== 8 && keyElement.keyCode !== 13){
            inputfield.value += keyElement.key;
            console.log(keyElement.key);
        }else if(keyElement.keyCode === 8){
            inputfield.value = inputfield.value.slice(0 ,-1);
            console.log(keyElement);
        }else if(keyElement.keyCode === 13){
            calculate();
            console.log(keyElement);
        }else{
            console.log("Key "+ keyElement.key,"keyCode " + keyElement.keyCode);
        }
            
    }
}


// inputfield and formating
var inputfield = document.getElementById("inputfield");
inputfield.addEventListener('keydown',function(e){
    outputfield.value = e.key;
    findKey(e); 
});
//outputfield
var outputfield = document.getElementById("outputfield");
var B1 = document.getElementById("B1"); //Button 1
var B2 = document.getElementById("B2"); //Button 2
var B3 = document.getElementById("B3"); //Button 3
var B4 = document.getElementById("B4"); //Button 4
var B5 = document.getElementById("B5"); //Button 5
var B6 = document.getElementById("B6"); //Button 6
var B7 = document.getElementById("B7"); //Button 7
var B8 = document.getElementById("B8"); //Button 8
var B9 = document.getElementById("B9"); //Button 9
var B0 = document.getElementById("B0"); //Button 0

var Bd = document.getElementById("B."); //Button .
var Bdc = document.getElementById("B/"); //Button /
var Bm = document.getElementById("B*"); //Button *
var Bp = document.getElementById("B+"); //Button +
var Bs = document.getElementById("B-"); //Button -
var Bpp = document.getElementById("B="); //Button =
var Bpow = document.getElementById("B^");//Button power
B0.addEventListener("click",function(){inputfield.value += 0;});
B1.addEventListener("click", function(){inputfield.value += 1;});
B2.addEventListener("click", function(){inputfield.value += 2; });
B3.addEventListener("click", function(){inputfield.value += 3; });
B4.addEventListener("click", function(){inputfield.value += 4; });
B5.addEventListener("click", function(){inputfield.value += 5;});
B6.addEventListener("click", function(){inputfield.value += 6; });
B7.addEventListener("click", function(){inputfield.value += 7; });
B8.addEventListener("click", function(){inputfield.value += 8;});
B9.addEventListener("click", function(){inputfield.value += 9; });
Bd.addEventListener("click", function(){inputfield.value += "."; });
Bdc.addEventListener("click", function(){inputfield.value += "/";});
Bm.addEventListener("click", function(){inputfield.value += "*";});
Bp.addEventListener("click", function(){inputfield.value += "+";});
Bs.addEventListener("click", function(){inputfield.value += "-"; });
Bpp.addEventListener("click", function(){calculate();});
Bpow.addEventListener("click", function(){inputfield.value += "^"; });
function calculate(){
    console.log("########################################");
    console.log("Calculator field value: ",inputfield.value);
    console.log("########################################");
    var input = inputfield.value;
    var number  = '';
    var number1 = '';
    var number2 = '';
    var currentSign = '';
    var currentElem = '';
    for(var i = 0; i<input.length; i++){
        currentElem = input[i];
        console.log("##############");
        console.log("Current Element = ", currentElem, " I = ", i);
        if(currentSign == '' && !isNaN(currentElem) || currentElem == "." ){
            number1 += currentElem;
            console.log("###############");
            console.log(number1, currentElem);
        }else if(currentSign === '' && isNaN(currentElem) && currentElem !== "."){
            currentSign = currentElem;
            console.log("##############");
            console.log("Sign Found @", i ,"Sign =", currentSign, "Element", currentElem);
        }else if(currentSign!=='' && !isNaN(currentElem) || currentElem == "."){
            number2 += currentElem;
            console.log("##############");
            console.log(number2, currentElem);
        }else if(currentSign!=='' && isNaN(currentElem)){
            console.log(number1, number2, currentSign);
            if(currentSign =="*"){
                number = +number1 * +number2;
            }else if(currentSign == "/"){
                number = +number1 / +number2;
            }else if(currentSign == "+"){
                number = +number1 + +number2;
            }else if(currentSign == "-"){
                number = +number1 - +number2;
            }else if(currentSign == "^"){
                number = Math.pow(+number1,  +number2);  
            }
            currentSign = currentElem;
            number1 = number;
            number2 = 0;
        }
        console.log(number1, currentSign, number2);
    if(currentSign =="*"){
            number = +number1 * +number2;
        }else if(currentSign == "/"){
            number = +number1 / +number2;
        }else if(currentSign == "+"){
            number = +number1 + +number2;
        }else if(currentSign == "-"){
            number = +number1 - +number2;
        }else if(currentSign == "^"){
            number = Math.pow(+number1,  +number2); 
        }
    }
    console.log(number);
    outputfield.value = number;
}