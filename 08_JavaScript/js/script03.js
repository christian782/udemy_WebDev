
var memory = []
var sum = 0
do{
    var input = parseInt(prompt('Bitte eine Zahl eingeben:')); 
    if (input != 0 || isFinite(input)){
        memory.push(input)
    };
}while( input != 0 || isFinite(input))

for(let i = 0; i < memory.length; i++){
    sum+= memory[i]
}
console.log(sum);
console.log(memory.length);
console.log(memory);

result = sum/memory.length

document.write(result);