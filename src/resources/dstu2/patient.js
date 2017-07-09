import faker from 'faker';
import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';
import sanitise from '../../utils/sanitise';
import { transformer, availableFields } from '../../transformers/dstu2/patient';

const patient = (fields, overrides) => R.compose(
  applyOverrides(overrides),
  sanitise([
    ['deceasedBoolean', 'deceasedDateTime'],
    ['multipleBirthBoolean', 'multipleBirthInteger'],
  ]),
  R.merge({ resourceType: 'Patient', id: faker.random.uuid() }),
  R.evolve(transformer),
  R.ifElse(
    R.isNil,
    () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
    R.pick(availableFields),
  ),
)(fields);

export default patient;
