import faker from 'faker';
import R from 'ramda';

const uses = ['home', 'work', 'temp', 'old'];
const types = ['postal', 'physical', 'both'];

const Address = () => {
  const use = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(uses) : '';
  const type = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(types) : '';
  const text = faker.random.number({ min: 1, max: 1 }) ? faker.lorem.sentence() : '';
  const line = [
    faker.random.number({ min: 1, max: 1000 }),
    faker.address.streetName(),
  ];
  const city = faker.random.number({ min: 1, max: 1 }) ? faker.address.city() : '';
  const district = faker.random.number({ min: 1, max: 1 }) ? faker.address.county() : '';
  const state = faker.random.number({ min: 1, max: 1 }) ? faker.address.state() : '';
  const postalCode = faker.random.number({ min: 1, max: 1 }) ? faker.address.zipCode() : '';
  const country = faker.random.number({ min: 1, max: 1 }) ? faker.address.country() : '';

  return R.reject(R.isEmpty, { use, type, text, line, city, district, state, postalCode, country });
};

export default Address;
