"use strict";

//Shallow nested array
const nestedArray = [[1, 2], [3, 4], [5, 6]];

function printDeepNestedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const num = parseInt(arr[i][j]);
      console.log(`Second Iteration: `, num);
    }
  }
}

printDeepNestedArray(nestedArray);

/* 
In JavaScript, when you define an array, you can include elements of different types within the same array. So, even though nestedArray may look like it contains integers, the elements inside it are actually treated as strings because they are enclosed in square brackets [].

Interpreted as :
nestedArray2[0] is `[1, 2]`
nestedArray2[1] is `[3, 4]`
nestedArray2[2] is `[5, 6]`
*/

/*
Second Iteration:  1
Second Iteration:  2
Second Iteration:  3
Second Iteration:  4
Second Iteration:  5
Second Iteration:  6
*/
