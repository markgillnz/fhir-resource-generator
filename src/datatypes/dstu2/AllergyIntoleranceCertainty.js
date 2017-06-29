import faker from 'faker';

const AllergyIntoleranceCertainty = () => faker.random.arrayElement(['unlikely', 'likely', 'confirmed']);

export default AllergyIntoleranceCertainty;
