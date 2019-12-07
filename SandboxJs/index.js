// exponencial Math.pow() é o mesmo que base ** expoente (ES6)

function exponencial (num, exp){
  return num ** exp; //or 
  //return Math.pow(num, exp); mesmo que isso
}
console.log(exponencial(10, 10));

// checa espaços vazios nas strings
function hasSpaces(str) {
  const vazio = " ";
  return str.includes(vazio);
}
console.log("Espaço vazio? " + hasSpaces("Ontem, hoje e sempre!"));

// verifica par ou ímpar - even or odd
function isEvenOrOdd(num) {
	const check = num % 2;
	const result = check === 0 ? "even" : "odd";
	return result;
}
console.log("even or odd? " + isEvenOrOdd(10));

// verifica string de array e retorna o index - indexOf()
function find_index(arr, str) {
	return arr.indexOf(str);
}

console.log(
  find_index(
    ["Alemanha", "Brasil", "Jamaica", "Austrália",], "Brasil"
  ));

// verifica se em um array possui determinado item
function check(arr2, el) {
	return arr2.includes(el);
}
console.log(check(
  [1, 2, 3, 4],
  4
));
//
//!n com inteiros a partir do zero
// !n 5 = 5 x 4 x 3 x 2 x 1 = 120

function nfatorial (int) {
  if ( int < 0 ) {
    return false;
  }
  for ( let i = int -1; i > 1; i--) {
    int *= i;
  }
  return int;
}
console.log(nfatorial(5));
console.log("------------------");
// !n com funcao recursiva

function nFatorialRec (int1) {
  if (int1 === 0){
    return 1
  } else{
    return (int1 * nFatorialRec(int1 - 1));
  }
}
console.log("Rec " + nFatorialRec(5));

console.log("------------------");

// !n com 3 saídas. Se < 0 = -1; se === 0 = 1; se > 0 segue fatorial com fun recursiva

function nFatorial3 (int2){
  if ( int2 < 0 ){
    return -1
  } else if ( int2 === 0 ){
    return 1
  } else{
    return (int2 * nFatorial3(int2 - 1));
  }
}
console.log(nFatorial3(13))
//
// Reverse Array

// Calculando o volume total de uma pizza
// (raio ** 2) * (height * Math.PI)
// Improving about Math.round(); Math.PI; how to calculate area's pizza

function volPizza(radius, height) {
  const result = (radius ** 2) * (height * Math.PI);
  
  return Math.round(result);
}

console.log(volPizza(7,2));

//
/* learning about arrays, indexOf() that verifies if content is on array, 
its return 1 true and -1 false; ternary operator JS -> args ? foo : foo */

function search(arr, item) {
  const result = arr.indexOf(item) ? true : false;
  
  return result;
}
console.log(search(
  [1, 2, 3, 4, 5], 2
));

/* Receive a number of slices and verify if it's possible to do a fair division
among the people.
Learning: conditional and mathematic operations in JS.
*/

// total number of slices; number of recipients; how many slices each person gets
function equalSlices(total, people, each) {
  const totalSlices = total;
  const result = people * each;
  const final = totalSlices >= result ? true : false;

  return final;
}

console.log(equalSlices(8, 5, 2));

/* Receive a string and verify if is plural
Learning: Verifying the end letter of a string: .endsWith() method.
*/

function isPlural(word) {
  const initialWord = word;
  const pluralAssing = "s";

  const result = initialWord.endsWith(pluralAssing) ? true : false;
  
  return result;
}
console.log(isPlural("change"));

//recebe array e multiplica-os
function produto (arr){
  let numbers = arr;
  let total = 1;
  for( let i = 0; i < numbers.length; i++ ){
    total = total * numbers[i];
  }
  console.log(total);

}
produto([1, 2, 7]);
// multiplicando o primeiro valor pelo segundo e criando um array
function arrayOfMultiples(num, length) {
  let arrNew = [];
  for ( let i = 1; i <= length; i++ ){
    const multiplicando = i * num;
    arrNew.push(multiplicando);
  }
  console.log(arrNew);
}
arrayOfMultiples(7, 5);

// String to integer and vice versa - revisando toString() e parseInt();
function toInt(str) {
  const result = parseInt(str);
  return console.log(result);
}
toInt("10");

function toStr(int) {
  const result = int.toString();
  return console.log(result);
}
toStr(10);

// take three numbers and return the diference between the max and min
// learning Math functions JS (max and min)
function programmers(one, two, three) {
  const max = Math.max(one, two, three);
  const min = Math.min(one, two, three);
  return max - min;
}
programmers(1, 5, 9);