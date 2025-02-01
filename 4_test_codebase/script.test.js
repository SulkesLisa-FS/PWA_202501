const {sum, sumOfArray, findMax} = require('./script'); 

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
  // Expect Array with mixed numbers 2, -4, 6 to Return 0
  expect(sumOfArray([2, -4, 6])).toBe(4);
  // Expect Array with mixed numbers & Decimals 4, -2, 4.5, -1.3 Return Close to 5.2
})

// FUNCTION TWO ______________________________

test('Test findMax() - Returns the largest number in the array', () => {

// Expect Array of [68, 125, 97, 87] to Return 125
expect(findMax([68, 125, 97, 87 ])).toBe(125);

// Expect Array of [-68, -125, -97, -87] to Return -68
expect(findMax([-68, -125, -97, -87])).toBe(-68);

// Expect Array of [6.8, 1.25, 9.7, 8.7] to Return Close to 9.7
expect(findMax([6.8, 1.25, 9.7, 8.7])).toBeCloseTo(9.7);




})