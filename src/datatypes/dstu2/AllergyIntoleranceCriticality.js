import faker from 'faker';

const AllergyIntoleranceCriticality = () => faker.random.arrayElement(['CRITL', 'CRITH', 'CRITU']);

export default AllergyIntoleranceCriticality;
