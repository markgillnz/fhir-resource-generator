import faker from 'faker';

const AllergyIntoleranceSeverity = () => faker.random.arrayElement(['mild', 'moderate', 'severe']);

export default AllergyIntoleranceSeverity;
