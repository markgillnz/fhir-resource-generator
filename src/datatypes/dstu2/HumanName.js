import faker from 'faker';
import R from 'ramda';

const HumanName = () => ({
  use: faker.random.arrayElement(['usual', 'official', 'nickname', 'anonymous', 'old', 'maiden']),
  family: R.times(faker.name.lastName, faker.random.number({ min: 1, max: 2 })),
  given: R.times(faker.name.firstName, faker.random.number({ min: 1, max: 2 })),
  prefix: [faker.name.prefix()],
  suffix: [faker.name.suffix()],
});

export default HumanName;
