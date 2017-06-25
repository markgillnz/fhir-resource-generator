import faker from 'faker';

const AdministrativeGender = () => faker.random.arrayElement(['male', 'female', 'other', 'unknown']);

export default AdministrativeGender;
