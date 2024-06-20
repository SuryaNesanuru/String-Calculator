import { add } from '../src/stringCalculator';

//test('should handle new lines between numbers', () => {
 // expect(add('1\n2,3')).toBe(6);
//});

test('should support different delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});



  