import R from 'ramda';

import InnerExtension from '../../datatypes/dstu2/extensions/InnerExtension';
import IdentifierExtension from '../../datatypes/dstu2/extensions/IdentifierExtension';
import CodingExtension from '../../datatypes/dstu2/extensions/CodingExtension';

const transformer = (value, key) => R.cond([
  [R.equals('identifier'), () => R.times(IdentifierExtension, value)],
  [R.equals('coding'), () => R.times(CodingExtension, value)],
  [R.equals('extension'), () => InnerExtension(value)],
  [R.T, R.identity],
])(key);
const availableFields = ['identifier', 'coding'];

export {
  transformer,
  availableFields,
};
