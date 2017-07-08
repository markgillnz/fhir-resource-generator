import faker from 'faker';

import extension from '../../../resources/dstu2/extension';

const InnerExtension = fields => ({
  url: faker.internet.url(),
  extension: extension(fields),
});

export default InnerExtension;
