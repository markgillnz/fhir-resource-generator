import faker from 'faker';
import moment from 'moment';

const getDateBefore = (years, date) => moment(faker.date.past(years, date)).format('YYYY-MM-DD');
const getDateTimeInPast = years => faker.date.past(years);
const getDateTimeInPastAfter = date => faker.date.between(date, moment());

export {
  getDateBefore,
  getDateTimeInPast,
  getDateTimeInPastAfter,
};
