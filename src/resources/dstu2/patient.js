import faker from 'faker';
import R from 'ramda';

import HumanName from '../../datatypes/dstu2/HumanName';
import Identifier from '../../datatypes/dstu2/Identifier';
import ContactPoint from '../../datatypes/dstu2/ContactPoint';
import Address from '../../datatypes/dstu2/Address';
import AdministrativeGender from '../../datatypes/dstu2/AdministrativeGender';
import ContactBackboneElement from '../../datatypes/dstu2/ContactBackboneElement';

import { getDateBefore, getDateTimeInPastAfter } from '../../utils/datetime';

const generators = {
  identifier: count => R.times(Identifier, count),
  name: count => R.times(HumanName, count),
  telecom: count => R.times(ContactPoint, count),
  gender: () => AdministrativeGender(),
  birthDate: date => getDateBefore(100, date, 'YYYY-MM-DD'),
  deceasedBoolean: () => faker.random.boolean(),
  deceasedDateTime: date => getDateTimeInPastAfter(date),
  address: count => R.times(Address, count),
  contact: count => R.times(ContactBackboneElement, count),
};
const availableFields = R.keys(generators);

const patient = (fields, overrides) => {
  let randomPatient = R.compose(
    R.merge({ resourceType: 'Patient', id: faker.random.uuid(), active: true }),
    R.evolve(generators),
    R.ifElse(
      R.isNil,
      () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
      R.pick(availableFields),
    ),
  )(fields);

  R.forEachObjIndexed((value, key) => {
    const pathArray = R.split('.', key)
      .map(val => R.defaultTo(val, parseInt(val, 10)));
    const lens = R.lensPath(pathArray);
    randomPatient = R.set(lens, value, randomPatient);
  }, overrides);

  return randomPatient;
};

export default patient;
