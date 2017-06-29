import faker from 'faker';

const Reference = datatype => ({
  reference: `${datatype}/${faker.lorem.word()}`,
  display: faker.lorem.sentence(),
});

export default Reference;
