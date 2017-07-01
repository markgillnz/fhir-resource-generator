import faker from 'faker';
import R from 'ramda';

const ContactPoint = () => {
  const system = faker.random.arrayElement(['phone', 'fax', 'email', 'pager', 'other']);
  const value = R.equals(system, 'email') ? faker.internet.email() : faker.phone.phoneNumber();
  const use = faker.random.arrayElement(['home', 'work', 'temp', 'old', 'mobile']);
  const rank = 1;

  return { system, value, use, rank };
};

export default ContactPoint;
