

const intZahl = 15;

//1. 'normale Funktion
function addieren(x,y){
    return x + y
};

//2.Arrow Funktion
addieren2 = (x,y) => {
    return x + y
}


let result = addieren( 8,9);

let result2 = addieren2(8, 9);

console.log(result);
console.log(result2);