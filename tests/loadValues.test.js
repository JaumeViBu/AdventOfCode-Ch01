const loadValues = require('../trebuchet.js').loadValues;

test('loadValues with test-input path, returns the contents of the text-input file', () => {

  expectedReturn = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];
  expect(loadValues('./test-input.txt')).toEqual(expectedReturn);
});
