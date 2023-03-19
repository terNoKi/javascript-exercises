function round(value, precision){
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier)/multiplier
}
const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32)*5/9
  return round(celsius, 1)
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius*9/5)+32
  return round(fahrenheit, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
