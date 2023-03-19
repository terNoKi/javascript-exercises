const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(array) {
  let sum = 0
  for (i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
  let multiplication = 1
  for (i = 0; i < array.length; i++){
    multiplication *= array[i]
  }
  return multiplication
};

const power = function(a,b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
 let factorial = 1
  if(a === 0){
    factorial = 1
  }else{
    for (i= a; i >= 1; i--){
    factorial *= i
  }
}
return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
