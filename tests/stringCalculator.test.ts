import { add } from '../src/stringCalculator';

test('should return the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});

  