# Largest Number Finder
Function will iterate through an array of arrays and returns the largest number of each array.
Assignment provided by FreeCodeCamp.org

## User Stories
1. You should create a function largestOfAll that takes an array of arrays as an argument.
2. The function should return an array containing the largest number from each sub-array.

## Tools & Languages Used
* JavaScript

## Features
* Will return largest number of an array even if it is negative

## Concepts Learned
* Accessing arrays in arrays
* Using sub indexes such as arr[i][0] to create a baseline number for the largest number

## Examples
```
function largestOfAll(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let largestNumber = arr[i][0];

  for (let j = 0; j < subArr.length; j++) {
    let currentNumber = subArr[j];

    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
      }
    }
  result.push(largestNumber);
  }
  return result
}

largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // returns [27, 5, 39, 1001]

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
