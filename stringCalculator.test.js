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

test('supports custom delimiters defined at the start having 2 numbers', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('supports custom delimiters defined at the start having 3 numbers', () => {
  expect(add("//;\n1;2;5")).toBe(8);
});

test('throws exception on negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});

test('throws exception on multiple negative numbers', () => {
  expect(() => add("1,-2,3,-4,-5")).toThrow("negative numbers not allowed: -2,-4,-5");
});

test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,1")).toBe(1001);
});

test('supports custom delimiter of any length', () => {
  expect(add("//[***]\n1***2***8")).toBe(11);
});
