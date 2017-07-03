import faker from 'faker';

import Identifier from '../Identifier';

const IdentifierExtension = () => ({
  url: faker.internet.url(),
  valueIdentifier: Identifier(),
});

export default IdentifierExtension;
