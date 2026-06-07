

var zahl = 5
let zahl2 = 10
function addieren(par1,par2){
    par1 = parseInt(par1);
    par2 = parseInt(par2);
    
    console.log(zahl);
    console.log(zahl2);
    var erg  = par1 + par2;
    return erg
}

let result = addieren(12,13);
console.log(result);

let i = 10;
do{
    console.log('Zähler ist bei ' + i);
    i--;
}while(i >0);

document.write('Ende ')