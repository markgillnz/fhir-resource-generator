import faker from 'faker';

const Reference = datatype => ({
  reference: `${datatype}/${faker.random.word()}`,
  display: faker.random.words(),
});

export default Reference;
