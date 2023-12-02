import { parseValue } from "../trebuchet.js";

test('parseValue must return the numerical value as a string', () => {
  const givenData = ['eight', 'five', 'three', 'three', 'one', '1', 'seven',];
  const expectedData = ['8', '5', '3', '3', '1', '1', '7',];
  for (let i = 0; i < givenData.length; i += 1) {
    expect(parseValue(givenData[i])).toBe(expectedData[i]);
  }
});