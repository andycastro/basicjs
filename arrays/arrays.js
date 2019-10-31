// Crud com Arrays JavaScript

//Arrays em JavaScript podem ser representados da seguinte forma:
let arraySample = [
  "banana",
  "apple", 
  "pinaple",
  "grape"
];

console.log(arraySample);

for (let i = 0; i < arraySample.length; i++){
  if( arraySample[i] === 'banana' ){
    arraySample.splice(i, 1);
    i--;
  }
}

console.log(arraySample);

document.querySelector('#show').innerHTML = arraySample;

let fk = arraySample.keys();
for ( x of fk ) {
  console.log(x);
}