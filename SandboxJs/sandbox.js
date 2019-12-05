function arrayOfMultiples(num, length) {
  let arrNew = [];
  for ( let i = 1; i <= length; i++ ){
    const multiplicando = i * num;
    arrNew.push(multiplicando);
  }
  console.log(arrNew);
}
arrayOfMultiples(7, 5);