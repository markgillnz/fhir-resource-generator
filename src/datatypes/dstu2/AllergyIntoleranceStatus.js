import faker from 'faker';

const AllergYIntoleranceStatus = () => faker.random.arrayElement(
  ['active', 'unconfirmed', 'confirmed', 'inactive', 'resolved', 'refuted', 'entered-in-error']);

export default AllergYIntoleranceStatus;
