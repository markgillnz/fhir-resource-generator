import faker from 'faker';

const Address = () => ({
  use: faker.random.arrayElement(['home', 'work', 'temp', 'old']),
  type: faker.random.arrayElement(['postal', 'physical', 'both']),
  text: faker.random.words(),
  line: [
    faker.random.number({ min: 1, max: 1000 }),
    faker.address.streetName(),
  ],
  city: faker.address.city(),
  district: faker.address.county(),
  state: faker.address.state(),
  postalCode: faker.address.zipCode(),
  country: faker.address.country(),
});

export default Address;
