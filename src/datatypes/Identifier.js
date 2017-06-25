import faker from 'faker';
import R from 'ramda';
import CodeableConcept from './CodeableConcept';

const uses = ['usual', 'official', 'temp', 'secondary'];

const Identifier = () => {
  const use = faker.random.number({ min: 1, max: 1 }) ? faker.random.arrayElement(uses) : '';
  const type = faker.random.number({ min: 1, max: 1 }) ? CodeableConcept() : {};
  const system = faker.random.number({ min: 1, max: 1 }) ? faker.internet.url() : '';
  const value = faker.random.number({ min: 1, max: 1 }) ? faker.lorem.word() : '';

  return R.reject(R.isEmpty, { use, type, system, value });
};

export default Identifier;
