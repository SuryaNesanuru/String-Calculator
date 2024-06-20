import { add } from '../src/stringCalculator';

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

test('should return the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});





  