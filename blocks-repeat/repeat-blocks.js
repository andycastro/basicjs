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


// While - Executa enquanto verdadeiro
