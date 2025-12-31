/*
Assignment provided by FreeCodeCamp.org

Completed: December 29th, 2025
Program Description: Iterates through an array of arrays and returns the largest number of each array.

Comments: Once I figured out how to access the variables in the arrays with a nested loop, everything became more clear.
This was also the first time I used a nested loop. 
I really needed to think where to push the largest number into the array. It needed to be in the right place!
I used sub indexes to access variables in the array to createa a default largest number to avoid bugs with negative numbers.
*/

function largestOfAll(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]; // This will allow me to iterate through each sub array.
    let largestNumber = arr[i][0]; // Without this default variable for the largestNumber, negative numbers provide bugs. 

  for (let j = 0; j < subArr.length; j++) {
    let currentNumber = subArr[j]; // These are the numbers I need to compare.

    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
      }
    }
  result.push(largestNumber); // This will add to the results variable upon finishing finding the largest number in each array.
  }
  return result
}
