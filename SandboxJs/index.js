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

