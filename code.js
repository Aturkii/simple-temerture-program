document.getElementById("submitBtn").onclick = function() {

let temp;

if(document.getElementById("cDegree").checked) {

 temp = document.getElementById("textBox").value;
 temp = Number(temp);
 temp = toCelsius(temp);
 document.getElementById("tempr").innerHTML = temp + "°C"

}
else if(document.getElementById("fDegree").checked) {

 temp = document.getElementById("textt").value;
 temp = Number(temp);
 temp = toFahrneit(temp);
 document.getElementById("tempr").innerHTML = temp + "°F"

}
else {
 document.getElementById("tempr").innerHTML = "Please select a unit ..."
}
}


function toCelsius(temp){
  return (temp - 32 ) * (5/9);
}

function toFahrneit(temp){
  return temp * 9 / 5 + 32;
}