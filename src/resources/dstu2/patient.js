import faker from 'faker';
import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';
import { transformer, availableFields } from '../../transformers/dstu2/patient';

const patient = (fields, overrides) => R.compose(
  applyOverrides(overrides),
  R.merge({ resourceType: 'Patient', id: faker.random.uuid(), active: true }),
  R.ifElse(
    R.and(R.has('deceasedBoolean'), R.has('deceasedDateTime')),
    R.omit(faker.random.arrayElement(['deceasedBoolean', 'deceasedDateTime'])),
    R.identity,
  ),
  R.evolve(transformer),
  R.ifElse(
    R.isNil,
    () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
    R.pick(availableFields),
  ),
)(fields);

export default patient;
