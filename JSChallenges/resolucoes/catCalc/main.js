'strict'
// dom manipulation
let resultNumber = document.querySelector('#resultNumber');
const clearId = document.querySelector('#clearId');

clearId.addEventListener('click', clear);

let number = "";
let operators = [];

function show (num){
  number = number.concat(num.innerHTML);
  
  return resultNumber.innerHTML = number;
}

function operatorsAction (op) {
  operators[0] = number;
  operators[1] = op.innerHTML;
  const result = resultNumber.innerHTML = number + op.innerHTML;
  number = "";
  return result;
}

function equals () {
  operators[2] = number;
  switch (operators[1]){
    case '+':
      total = parseInt(operators[0]) + parseInt(operators[2]);
      break;
    case '-':
      total = parseInt(operators[0]) - parseInt(operators[2])
      break;
    case 'x':
        total = parseInt(operators[0]) * parseInt(operators[2])
        break;
    case '÷':
        total = parseInt(operators[0]) / parseInt(operators[2])
        break;
  }
  clear();
  number = total.toString();
  
  return resultNumber.innerHTML = total;
}

function clear (){
  number = "";
  operators = [];
  return resultNumber.innerHTML = number;
}