//import { add } from '../src/stringCalculator';

//test('should handle new lines between numbers', () => {
 // expect(add('1\n2,3')).toBe(6);
//});

/*test('should support different delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});*/

/*test('should throw an exception for negative numbers', () => {
  expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
});

test('should list all negative numbers in the exception message', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});*/

/*test('should return the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});*/

/*test('should handle new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
});*/

//test('should handle custom delimiters', () => {
//  expect(add('//;\n1;2;3')).toBe(6);
//});

// src/stringCalculator.ts
export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  numbers = numbers.replace(/\n/g, delimiter);
  const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }
  return nums.reduce((sum, num) => sum + num, 0);
}








  