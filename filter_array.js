
// function filters out only +ve numbers
// const numbers = [1, -1, -2, 3, 4, 5];

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });

// console.log(filtered);

// ****************************

// same function but using arrow function

// const numbers = [1, -1, -2, 3, 4, 5];

// const filtered = numbers.filter(value => value >= 0);

// console.log(filtered);

// ****************************

// another simplified version:

const numbers = [1, -1, -2, 3, 4, 5];

const filtered = numbers.filter(value => value >= 0);

console.log(filtered);