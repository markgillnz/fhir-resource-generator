import faker from 'faker';

const AllergyIntoleranceType = () => faker.random.arrayElement(['allergy', 'intolerance']);

export default AllergyIntoleranceType;
