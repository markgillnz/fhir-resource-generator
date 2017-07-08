import faker from 'faker';

import { getDateTimeInPastAfter } from '../../../src/utils/datetime';

test('returns a valid datetime in the ISO format', () => {
  // eslint-disable-next-line
  const format = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
  expect(getDateTimeInPastAfter(1).toString()).toMatch(format);
});

test('returns a datetime that is between now and the datetime provided', () => {
  const recentDateTime = faker.date.recent();
  const datetime = getDateTimeInPastAfter(recentDateTime);
  expect(Date.parse(datetime)).toBeLessThan(Date.now());
  expect(Date.parse(datetime)).toBeGreaterThan(recentDateTime.getTime());
});
