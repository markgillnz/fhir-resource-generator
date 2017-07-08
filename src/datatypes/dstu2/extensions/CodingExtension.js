import faker from 'faker';

import Coding from '../Coding';

const IdentifierExtension = () => ({
  url: faker.internet.url(),
  valueCoding: Coding(),
});

export default IdentifierExtension;
