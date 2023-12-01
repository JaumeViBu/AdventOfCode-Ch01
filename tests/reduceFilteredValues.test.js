

test('reduce filtered values, adding them together', () => {
  const givenData = [12, 38, 15, 77,];
  const expected = 142;
  expect(givenData.reduce((acc, val) => acc + val, 0)).toBe(expected);
});

test('reduce filtered values, adding them together', () => {
  const givenData = [29, 83, 13, 24, 42, 14, 76,];
  const expected = 281;
  expect(givenData.reduce((acc, val) => acc + val, 0)).toBe(expected);
});

test('reduce 15 first filtered values from input.txt', () => {
  const givenData = [
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
    12,];
  const expected = 709;
  expect(givenData.reduce((acc, val) => acc + val, 0)).toBe(expected);
});
