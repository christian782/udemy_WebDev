//Variablen für ersten Teil
const myButton = document.getElementById("myButton");
const btnGreeting = document.getElementById("btnGreeting");
const btnReset = document.getElementById("reset");
const counter = document.getElementById("counter");
//
const txtName = document.getElementById("name");
const txtAge = document.getElementById("age");
const btnSend1 = document.getElementById("sendButton");
const txaConsole = document.getElementById("console")
let clicks = 0;

myButton.addEventListener('click', ()=>{
    console.log('Hallo Welt!');
    clicks++;
    counter.innerHTML = clicks;
});

btnReset.addEventListener('click',()=>{
    clicks = 0;
    counter.innerHTML = clicks;
})

btnGreeting.addEventListener('click',()=>{alert('Hallo Christian.')});
//------------------------------------------------------------------------
btnSend1.addEventListener('click',()=>{
    strName = txtName.value;
    strAge = txtAge.value;
    txaConsole.innerHTML = 'Hallo ' + strName + '. Du bist ' + strAge + ' Jahre alt.';
    if (parseInt(strAge) <= 15){
        txaConsole.innerHTML+="\n Du hast keine Zugriff."
    }else if(parseInt(strAge) < 18){
        txaConsole.innerHTML+="\n Du hast nur eingeschränkten Zugriff."
    }else{
        txaConsole.innerHTML+="\n Du hast freien Zugriff auf den Inhalt."
    }
});


//--------------------------------------------------
var arrZahlen = new Array(0,1,2,3,4);
let arrSimpleNumbers = [1,2,3,4,5,6,7,8];
var arrPersonen = [];

arrPersonen[5] = 'Gerd';
console.log(arrZahlen[2]);
console.log(arrSimpleNumbers[1]);

console.log(arrPersonen);

//----------------------------------------------------------

function hoch3(n){
    return n**3;
};

hoch2 = (n)=>{return n**2};

console.log(hoch3(2));
console.log(hoch2(2));