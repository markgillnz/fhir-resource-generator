import R from 'ramda';
import faker from 'faker';

const sanitise = keys =>
  (resource) => {
    let sanitisedResource = resource;
    R.forEach((list) => {
      if (R.reduce((acc, key) => (R.has(key, resource) ? acc + 1 : acc), 0, list) > 1) {
        const selectedKey = faker.random.arrayElement(list);
        sanitisedResource = R.omit(R.without([selectedKey], list), sanitisedResource);
      }
    }, keys);
    return sanitisedResource;
  };

export default sanitise;
