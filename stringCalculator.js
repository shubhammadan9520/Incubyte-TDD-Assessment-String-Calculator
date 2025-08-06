function add(numbers) {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterSectionEnd = numbers.indexOf('\n');
    const delimiterSection = numbers.substring(2, delimiterSectionEnd);
    numbers = numbers.substring(delimiterSectionEnd + 1);

    const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
    if (delimiterMatches) {
      const delimiters = delimiterMatches.map(d => d.slice(1, -1));

      const escapedDelimiters = delimiters.map(d => d.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'));
      delimiterRegex = new RegExp(escapedDelimiters.join('|'));
    } else {
      delimiterRegex = new RegExp(delimiterSection);
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