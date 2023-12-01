const fs = require("fs")

function loadValues(path) {

  console.log(path)
  const values = fs.readFileSync(path).toString().split("\r\n");
  return values;
}

function filterValues(values) {

  let filtered = [];

  for (str of values) {

    if (str === '') {

      continue;
    }

    const frontParsedNums = str.match(/(one|two|three|four|five|six|seven|eight|nine|\d)/);
    let backParsedNums = null;

    for (let i = str.length - 1; i >= 0; i -= 1) {

      backParsedNums = str.slice(i).match(/(one|two|three|four|five|six|seven|eight|nine|\d)/);
      if (backParsedNums) break;
    }
    res = Number(parseValue(frontParsedNums[0]) + parseValue(backParsedNums[0]))
    filtered.push(res);
  }
  return filtered;
}

function parseValue(value) {
  if (!isNaN(value)) return value;
  const testVal = value.toLowerCase();
  switch (testVal) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
  }
}

module.exports.loadValues = loadValues;
module.exports.filterValues = filterValues;
module.exports.parseValue = parseValue;

/*****************************************************************************************************/

// const FILEPATH = './test-input.txt';
const FILEPATH = './input.txt';

function main() {

  const values = loadValues(FILEPATH);
  const filtered = filterValues(values);
  console.log(filtered.reduce((acc, val) => acc + val, 0));
}

main();