/*
Problem 1 : 
You have an array of temperatures in Celsius, and you want to convert them to Fahrenheit. Write a JavaScript function that takes an array of temperatures in Celsius and returns a new array with the temperatures converted to Fahrenheit.
*/

const celsiusTemperatures = [0, 15, 30, 45, 60];

function celsiusToFahrenheit(temperaturesInCelsius) {
  const fahrenheit = temperaturesInCelsius * 9 / 5 + 32;
  return fahrenheit;
}

const fahrenheitTemps = [];

for (let i = 0; i < celsiusTemperatures.length; i++) {
  const conversion = celsiusToFahrenheit(celsiusTemperatures[i]);
  fahrenheitTemps.push(conversion);
}

console.log(`Celsius to Fahrenheit: `, fahrenheitTemps);
