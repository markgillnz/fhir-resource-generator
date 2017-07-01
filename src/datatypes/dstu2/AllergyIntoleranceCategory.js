import faker from 'faker';

const AllergyIntoleranceCategory = () => faker.random.arrayElement(['food', 'medication', 'environment', 'other']);

export default AllergyIntoleranceCategory;
