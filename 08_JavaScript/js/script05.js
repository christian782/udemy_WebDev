//Variablen Objekte
const colorBox = document.getElementById("colorBox");
const colorValue = document.getElementById("colorValue");
const ranButton = document.getElementById("rButton");


//Button drücken
ranButton.onclick = ()=>{
    const redValue = Math.floor(Math.random()*256);
    const greenValue = Math.floor(Math.random()*256);
    const blueValue = Math.floor(Math.random()*256);
    colorBox.style.backgroundColor = 'RGB(' + redValue + ', ' + greenValue + ', ' +  blueValue +')';
    colorValue.innerHTML = 'Rotanteil: ' + redValue +' Grünanteil: '+ greenValue + ' Blauanteil: ' + blueValue;
}
