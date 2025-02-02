const {sum, sumOfArray, findMax, isPalindrome, capitalizedWords, purgeDuplicates  } = require('./script'); 

// TEST - IMPORT AND EXPORT OF FUNCTIONS
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
  // Expect Negative Floating points -2.5, -3.5, -1.3 to Return Close To -7.3
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
// Expect Empty Arry [ ] to Return -infinity
expect(findMax([])).toBe(-Infinity);
// Expect Array of [1000] single - to Return 1000
expect(findMax([1000])).toBe(1000);
// Expect Array Mix [68, -125, 97, 8.7] to Return 97
expect(findMax([68, -125, 97, 8.7])).toBe(97);
// Expect Array of strings ['68', '-125', 97, 99.3] to return close to 99.3
expect(findMax(['68', '-125', '97', '99.7'])).toBeCloseTo(99.7);
})

// FUNCTION THREE ______________________________

test('Test isPalindrome() - Checks if palindrome Returns True or False', () => {

  // Expect longer palindrome string - to be true
  expect(isPalindrome('Was it a cat I saw')).toBe(true);
  // Expect simple palindrome string - to be true
  expect(isPalindrome('Sas')).toBe(true);
  // Expect upper and lower case palindrome string - to be true
  expect(isPalindrome('if I had a hiFi')).toBe(true);
  // Expect numbers palindrome string - to be true
  expect(isPalindrome('12344321')).toBe(true);
  // Expect spaces, commas and exclamation used with palindrome - to be true
  expect(isPalindrome('Wow!, wow!')).toBe(true);
  // Expect empty string - to be true
  expect(isPalindrome('')).toBe(true);
  // Expect none palindrome string - to be false
  expect(isPalindrome('word')).toBe(false);
  // Expect none palindrome number string - to be false
  expect(isPalindrome('1234')).toBe(false);
  // Expect a single character string - to be true
  expect(isPalindrome('A')).toBe(true);
})


// FUNCTION FOUR ______________________________

test('Test captializeWords() - Returns first letter of each word as capital', () => {

  // Expect lowercase words - Return the first letter of each word as capital
  expect(capitalizedWords('eat pizza')).toMatch('Eat Pizza');
  // Expect single word - Return the first letter as capital
  expect(capitalizedWords('pizza')).toMatch('Pizza');
  // Expect empty string - Return empty string
  expect(capitalizedWords('')).toMatch('');
  // Expect mixed letter cases - Return first letter of each word as capital and the rest of the letters lowercase
  expect(capitalizedWords('i eAT PiZzA')).toMatch('I Eat Pizza');
  // Expect spaces - Return equal spaces
  expect(capitalizedWords('spicy  sweet  ')).toBe('Spicy  Sweet  ');
  //Expect special characters - Return special characters
  expect(capitalizedWords('hOt-cheese!, spIcy! pepperOni!')).toMatch('Hot-cheese!, Spicy! Pepperoni!');
  // Expect all capital letters - Return first letter of each word as capital and the rest of the letters lowercase
  expect(capitalizedWords('THANK YOU!')).toMatch('Thank You!');
  // Expected string - to Match string in regex
  expect(capitalizedWords(' this string ')).toMatch(/This String/);
  // Expected string - to Match regex
  expect(capitalizedWords('this is test 4')).toMatch(/\b[A-Z][a-z]*\b/g);
})

// FUNCTION FIVE ______________________________
// Extra 

test('Test purgeDuplicates() - Return a new array with no duplicate values', () => {
// Expect number array - Returns a new array with no duplicate values
expect(purgeDuplicates([22, 34, 7, 22, 56, 7, 34])).toEqual([22, 34, 7, 56]);
// Expect string of words - Returns a new array with no duplicate values
expect(purgeDuplicates(['a', 'cat', 'a', 'mouse', 'a', 'dog'])).toEqual(['a', 'cat', 'mouse', 'dog']);
// Expect a mix of numbes and strings - Return a new array with no duplicate values
expect(purgeDuplicates(['a', 1, 'cat', 'Ouch!', 44, 'a', 'A', 'dog', 1, 'A'])).toEqual(['a', 1, 'cat', 'Ouch!', 44, 'A', 'dog']);
// Expect string of mixed case letters - Return a new array with no duplicates
expect(purgeDuplicates(['a', 'c', 'A', 'A', 'c', 'C'])).toEqual(['a', 'c', 'A', 'C']);
// Expect empty array - Return empty array
expect(purgeDuplicates([])).toEqual([]);
// Expect single string array - Return a single string array
expect(purgeDuplicates(['C'])).toEqual(['C']);
// Expect empty stirng  array - Return an single empty string array
expect(purgeDuplicates([' ', ' '])).toEqual([' ']);
})