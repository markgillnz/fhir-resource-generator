import faker from 'faker';
import R from 'ramda';
import Coding from './Coding';

const CodeableConcept = () => {
  const text = faker.random.number({ min: 1, max: 1 }) ? faker.lorem.sentence() : '';
  const coding = R.times(Coding, faker.random.number({ min: 1, max: 2 }));

  return R.reject(R.isEmpty, { coding, text });
};

export default CodeableConcept;
