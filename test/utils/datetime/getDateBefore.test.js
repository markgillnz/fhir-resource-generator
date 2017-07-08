import faker from 'faker';

import { getDateBefore } from '../../../src/utils/datetime';

test('returns a valid date in the format YYYY-MM-DD', () => {
  expect(getDateBefore(1, 1)).toMatch(/-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/);
});

test('returns a date that is before the date provided', () => {
  const recentDate = faker.date.recent();
  expect(Date.parse(getDateBefore(1, recentDate))).toBeLessThan(recentDate.getTime());
});
