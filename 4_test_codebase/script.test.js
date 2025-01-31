const {sum, sumOfArray} = require('./script'); 

// TEST - IMPORT AND EXPORT OF FUNCIONS
test('Test sum: add 5 + 10 equals 15', () => {
  expect(sum(5, 10)).toBe(15);
});

// FUNCTION ONE ______________________________

test('Test sumOfArray() - Returns the sum of all numbers', () => {

  // Expect Array of 2, 4, 6, 2 to Return the sum number 14
  expect(sumOfArray([2, 4, 6, 2])).toBe(14);
  // Expect Arra of Negative numbers -2, -4, -6 to Return the sum of -12
  expect(sumOfArray([-2, -4, -6])).toBe(-12)
  // Expect Floating point 2.5, 3.5, 1.3 to Return Close To 7.3
  expect(sumOfArray([2.5, 3.5, 1.3])).toBeCloseTo(7.3);
  // Expect Negative Floating point -2.5, -3.5, -1.3 to Return Close To -7.3
  expect(sumOfArray([-2.5, -3.5, -1.3])).toBeCloseTo(-7.3);
  // Expect Array that is empty to Return 0
  expect(sumOfArray([])).toBe(0);
  // Expect Array with single number of 125 to Return 125
  expect(sumOfArray([125])).toBe(125);








})
