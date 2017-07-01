import faker from 'faker';

const Coding = () => ({
  system: faker.internet.url(),
  code: faker.random.word(),
  display: faker.random.words(),
});

export default Coding;
