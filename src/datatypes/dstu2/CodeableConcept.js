import faker from 'faker';
import R from 'ramda';

import Coding from './Coding';

const CodeableConcept = () => ({
  text: faker.random.words(),
  coding: R.times(Coding, faker.random.number({ min: 1, max: 2 })),
});

export default CodeableConcept;
