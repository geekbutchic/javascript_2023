# JavaScript 2023 

### Problem 1: [Iterations, Arrays, Conversions]

* You have an array of temperatures in Celsius, and you want to convert them to Fahrenheit. Write a JavaScript function that takes an array of temperatures in Celsius and returns a new array with the temperatures converted to Fahrenheit.

**Code Synopsis:**
1. An array called `celsiusTemperatures` is defined, containing a list of temperatures in Celsius.
2. A function `celsiusToFahrenheit` is defined, which takes a temperature in Celsius as input and converts it to Fahrenheit using the formula `(Celsius * 9/5) + 32`. It returns the temperature in Fahrenheit.
3. An empty array called `fahrenheitTemps` is created to store the converted temperatures.
4. A `for` loop is used to iterate over each temperature in the `celsiusTemperatures` array.
5. Inside the loop, the `celsiusToFahrenheit` function is called with the current Celsius temperature, and the result (the equivalent temperature in Fahrenheit) is stored in the `conversion` variable.
6. The `conversion` value is then pushed into the `fahrenheitTemps` array using the `push` method.
7. After the loop, the code logs the converted Fahrenheit temperatures stored in the `fahrenheitTemps` array.

**What It Accomplishes:**
- The code converts a list of temperatures from Celsius to Fahrenheit and stores the results in a new array.
- It demonstrates the use of a `for` loop to iterate over an array, applying a function to each element, and collecting the results in a separate array.
- Finally, it displays the converted Fahrenheit temperatures in the console.

This code provides a practical example of how to perform batch conversions between temperature scales and how to work with arrays in JavaScript.
