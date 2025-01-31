const {sum, sumOfArray} = require('./script'); 

// TEST - IMPORT AND EXPORT OF FUNCIONS
test('Test sum: add 5 + 10 equals 15', () => {
  expect(sum(5, 10)).toBe(15);
});

// FUNCTION ONE ______________________________

test('Test sumOfArray() - Returns the sum of all numbers', () => {

  // Expect Array of 2, 4, 6, 2 to Return the sum number 14
  expect(sumOfArray([2, 4, 6, 2])).toBe(14);





})
