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