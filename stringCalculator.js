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

  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}

module.exports = { add };