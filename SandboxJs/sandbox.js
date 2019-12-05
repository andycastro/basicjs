function intOrString(param) {
  const check = typeof param;
	const result = check === "string" ? 'str' : 'int';
  console.log(check);
  return result;
}

console.log(intOrString(1));