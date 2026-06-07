//Array mit Werten
const arrSpeicher = ['Peter','Ralf','Max','Klaus'];
//Zugriff auf HTML-Element div mit der ID content
const contentArea = document.getElementById("content");
//for Schleife
for(let i =0; i<arrSpeicher.length;i++){
    contentArea.innerHTML+= '<p>' + arrSpeicher[i] + '</p>'
};

for(i = 10; i>=0; i--){
    console.log(i)
}

const strName = 'Christian';

const numAlter = 43;

var  vari = null
var u = undefined

console.log(strName,'Prüfung auf Zahl: ' + isFinite(strName),'Prüfung auf keine Zahl: '  +isNaN(strName));
console.log(numAlter,'Prüfung auf Zahl: ' + isFinite(numAlter),'Prüfung auf keine Zahl: '  +isNaN(numAlter));

var ergebnis=3;
ergebnis++; 
document.write(++ergebnis)