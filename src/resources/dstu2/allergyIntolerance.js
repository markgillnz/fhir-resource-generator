import faker from 'faker';
import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';
import { transformer, availableFields } from '../../transformers/dstu2/allergyIntolerance';

const patient = (fields, overrides) => R.compose(
  applyOverrides(overrides),
  R.merge({ resourceType: 'AllergyIntolerance', id: faker.random.uuid() }),
  R.evolve(transformer),
  R.ifElse(
    R.isNil,
    () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
    R.pick(availableFields),
  ),
)(fields);

export default patient;
