const { add } = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns 1 for a string with value 1', () => {
  expect(add("1")).toBe(1);
});

test('returns 6 for a string with value (1,5)', () => {
  expect(add("1,5")).toBe(6);
});

test('returns the sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers having 1 new line character', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('handles new lines between numbers having 2 new line character', () => {
  expect(add("1\n2,3\n 4")).toBe(10);
});
