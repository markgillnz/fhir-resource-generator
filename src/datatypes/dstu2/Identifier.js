import faker from 'faker';

import CodeableConcept from './CodeableConcept';

const Identifier = () => ({
  use: faker.random.arrayElement(['usual', 'official', 'temp', 'secondary']),
  type: CodeableConcept(),
  system: faker.internet.url(),
  value: faker.random.word(),
});

export default Identifier;
