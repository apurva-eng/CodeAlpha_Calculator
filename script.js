let display =
document.getElementById("display");



function appendValue(value){

display.value += value;

}



function clearDisplay(){

display.value="";

}



function deleteChar(){

display.value =
display.value.slice(0,-1);

}


function calculate(){

try{


let result =
eval(display.value);



let li =
document.createElement("li");


li.innerText =
display.value + " = " + result;



document
.getElementById("history")
.appendChild(li);



display.value=result;


}


catch{

display.value="Error";

}

}