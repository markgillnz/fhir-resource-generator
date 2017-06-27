import faker from 'faker';
import R from 'ramda';

const Coding = () => {
  const system = faker.random.number({ min: 1, max: 1 }) ? faker.internet.url() : '';
  const code = faker.random.number({ min: 1, max: 1 }) ? faker.lorem.word() : '';
  const display = faker.random.number({ min: 1, max: 1 }) ? faker.lorem.sentence() : '';

  return R.reject(R.isEmpty, { system, code, display });
};

export default Coding;
