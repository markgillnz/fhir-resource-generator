import faker from 'faker';
import moment from 'moment';

const getDateBefore = (years, date, format) => moment(faker.date.past(years, date)).format(format);
const getDateTimeInPastAfter = date => faker.date.between(date, moment());

export {
  getDateBefore,
  getDateTimeInPastAfter,
};
