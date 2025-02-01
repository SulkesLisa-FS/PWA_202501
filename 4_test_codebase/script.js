// TEST - IMPORT AND EXPORT OF FUNCIONS
const sum = (a,b) => a + b;


// FUNCTION ONE ______________________________

// Take an array of numbers and return the sum of all elements
const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);


// FUNCTION TWO ______________________________

// Takes an array of numbers and returns the larges number
const findMax = (arr) => Math.max(...arr)


// FUNCTION THREE ______________________________

// Checks if the input string is a palindrome
const isPalindrome = (str) => {
    const string = str.toLowerCase().replace(/[^\w+]/g, '');
    return string === string.split('').reverse().join('');
}


// FUNCTION FOUR ______________________________

//returns a new string where the first letter of each word is capitalized and the rest of the letters in the word are lowercase.
const capitalizedWords = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');




module.exports = {sum, sumOfArray, findMax, isPalindrome, capitalizedWords };