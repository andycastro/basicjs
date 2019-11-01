// Repeat, repeat, repeat

//Funções JavaScript

// Funções literais
function functionName () { 
  // acontece algo aqui
}

// Funções anonimas
var varName = function () { 
  // acontece algo aqui
}

// Funções com parametros
function functionName (param) { 
  // acontece algo aqui
}

// Função que retorna outra função como resultado
function functionName () { 
  return function () {
    // acontece algo aqui
  }
}

// Funções aninhadas
function functionName () { 
  function functionOtherName () {

  }
}


// Laços de repetição

// For

for ( [declaracaoInicial]; [condicao]; [incremento, decremento, etc] ){
  //faz alguma coisa
}
// O For será executado enquanto for true. ex:

let i;
for ( i = 0; i < 5; i++ ){
  console.log(i);
}

// For in - percorre todas as propriedades de um objeto

for ( variavel in objeto ) {
  //faz alguma coisa
}


// While - Executa enquanto verdadeiro

while (condicao){
  //faz alguma coisa
}

// Condicionais

// if

if ( condicao ) {
  //se verdadeiro, fará alguma coisa
}

// Ternário condicional JS

condicao ? retornoSeTrue: retornoSeFalse;

//ex

let a = 10;

a > 10 ? 'certo' : 'errado';

// if else

if ( condicao ) {
  //se verdadeiro, fará alguma coisa
} else{
  //se falso, fará alguma coisa
}

// if else if - multiplas condicoes

if ( condicao ){
  // se verdadeiro, fará alguma coisa, caso contrário executará a próxima
} else if ( condicao ){
  // se verdadeiro fará alguma coisa, caso contrário executará a próxima
} else {
  // se falso, fará alguma coisa
}

// Operadores de comparação

// ==    -> Igualdade de valor
// ===   -> Igualdade de valor e tipo
// !=     -> diferente em valor
// !==    -> diferente em valor e tipo

// Operadores lógicos

// && - and ou e - retorna true - ex: isso && aquilo
// || - or ou ou - retorna false - ex: isso || aquilo
// !  - not ou negação - retorna true - ex: !arg 