import faker from 'faker';
import R from 'ramda';

const systems = ['phone', 'fax', 'email', 'pager', 'other'];
const uses = ['home', 'work', 'temp', 'old', 'mobile'];

const ContactPoint = () => {
  const system = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(systems) : '';
  const value = R.equals(system, 'email') ? faker.internet.email() : faker.phone.phoneNumber();
  const use = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(uses) : '';
  const rank = faker.random.number({ min: 1, max: 1 }) ? 1 : '';

  return R.reject(R.isEmpty, { system, value, use, rank });
};

export default ContactPoint;
