import { filterValues } from "../trebuchet.js";

test('filterValues with testData must return the expectedData', () => {
  const givenData = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];
  const expectedData = [
    12, 38, 15, 77,
  ];
  expect(filterValues(givenData)).toEqual(expectedData);
});

test('filterValues with testData must return the expectedData, careful getting only first and last digit', () => {
  const givenData = [
    '19abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e95f',
    'treb7uchet',
  ];
  const expectedData = [
    12, 38, 15, 77,
  ];
  expect(filterValues(givenData)).toEqual(expectedData);
});

test('filterValues must also identify and extract string values of numbers, i.e. one, two...', () => {
  const givenData = [
    'eightfivesssxxmgthreethreeone1sevenhnz',
    'two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen',
  ];
  const expectedData = [
    87,
    29,
    83,
    13,
    24,
    42,
    14,
    76,
  ];
  expect(filterValues(givenData)).toEqual(expectedData);
});

test('filterValues with first 15 values of input.txt', () => {
  const givenData = [
    'eightfivesssxxmgthreethreeone1sevenhnz',
    'hzdlftdtfqfdbxgsix9onetwo13',
    '29threelgxljfhrjr',
    'pxvmbjprllmbfpzjxsvhc5',
    'seven2jtgjltvzbcdnjtsfiveonebhkzld',
    'twothreesixeight6eight6',
    'nptjqqxoneninert1927',
    '7beighttwob',
    '6onesix',
    '6fourfive97',
    'jxcgpx5ninemsqqfmkpnj',
    'jsdkqjbgx1gz5',
    '9fourxxmdqmmlrbpqgznone8lvtxftmfpseven',
    'qsdzrx6',
    'khone9fivefive2',
  ];
  const expectedData = [
    87,
    63,
    23,
    55,
    71,
    26,
    17,
    72,
    66,
    67,
    59,
    15,
    97,
    66,
    12,
  ];
  expect(filterValues(givenData)).toEqual(expectedData);
});

test('filterValues with last 10 values of input.txt', () => {
  const givenData = [
    'lbchtbsnhmxlq1rcjrlvgmdjmjhtk',
    '2gmzrn34eightkdpsgnine',
    'sevenljzcxlgpskvkprjb6',
    'sixkbsdxjvsncj2four',
    '1sixbl9seventwotgtfcstqgv4lc',
    '89threeseven5tnshndjcsxc',
    '42',
    'ninesevensrzxkzpmgz8kcjxsbdftwoner',
    '4gbdzqtddmt4eightsixfive',
    'dljxl7five6nrzfh5one',
  ];
  const expectedData = [
    11,
    29,
    76,
    64,
    14,
    85,
    42,
    91,
    45,
    71,
  ];
  expect(filterValues(givenData)).toEqual(expectedData);
});