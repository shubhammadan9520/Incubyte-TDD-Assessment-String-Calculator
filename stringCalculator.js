function add(numbers) {
  if (numbers === "") return 0;
  const delimiterRegex = /,|\n/;
  const nums = numbers.split(delimiterRegex).map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };