import { getDateTimeInPast } from '../../../src/utils/datetime';

test('returns a valid datetime in the ISO format', () => {
  // eslint-disable-next-line
  const format = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
  expect(getDateTimeInPast(1).toString()).toMatch(format);
});

test('returns a datetime that is in the past', () => {
  expect(Date.parse(getDateTimeInPast(1))).toBeLessThan(Date.now());
});
