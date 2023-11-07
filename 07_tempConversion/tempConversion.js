const convertToCelsius = function(tempInF) {
  
  let result = (tempInF - 32) * (5/9);
  return (Math.round(result * 10) / 10);

};

const convertToFahrenheit = function(tempInC) {

  let result = (tempInC * 9 / 5) + 32;
  return (Math.round(result * 10) / 10);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
