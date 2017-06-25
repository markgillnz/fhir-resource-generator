import faker from 'faker';
import R from 'ramda';

const uses = ['usual', 'official', 'nickname', 'anonymous', 'old', 'maiden'];

const HumanName = () => {
  const use = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(uses) : '';
  const family = R.times(faker.name.lastName, faker.random.number({ min: 1, max: 2 }));
  const given = R.times(faker.name.firstName, faker.random.number({ min: 1, max: 2 }));
  const prefix = R.times(faker.name.prefix, faker.random.number({ min: 1, max: 1 }));
  const suffix = R.times(faker.name.suffix, faker.random.number({ min: 1, max: 1 }));

  return R.reject(R.isEmpty, { use, family, given, prefix, suffix });
};

export default HumanName;
