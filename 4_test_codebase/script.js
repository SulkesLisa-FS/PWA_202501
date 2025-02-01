// TEST - IMPORT AND EXPORT OF FUNCIONS
const sum = (a,b) => a + b;


// FUNCTION ONE ______________________________

// Take an array of numbers and return the sum of all elements
const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);


// FUNCTION TWO ______________________________

// Takes an array of numbers and returns the larges number
const findMax = (arr) => Math.max(...arr)





module.exports = {sum, sumOfArray, findMax};