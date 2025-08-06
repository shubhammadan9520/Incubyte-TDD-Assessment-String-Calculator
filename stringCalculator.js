function add(numbers) {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n(.*)/);
    if (match) {
      const [, customDelim, rest] = match;
      delimiterRegex = new RegExp(customDelim);
      numbers = rest;
    }
  }

  const nums = numbers.split(delimiterRegex).map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };