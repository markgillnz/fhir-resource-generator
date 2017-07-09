import R from 'ramda';
import faker from 'faker';

import HumanName from '../../datatypes/dstu2/HumanName';
import Identifier from '../../datatypes/dstu2/Identifier';
import ContactPoint from '../../datatypes/dstu2/ContactPoint';
import Address from '../../datatypes/dstu2/Address';
import AdministrativeGender from '../../datatypes/dstu2/AdministrativeGender';
import ContactBackboneElement from '../../datatypes/dstu2/ContactBackboneElement';
import CodeableConcept from '../../datatypes/dstu2/CodeableConcept';
import { getDateBefore, getDateTimeInPastAfter } from '../../utils/datetime';

const transformer = {
  active: () => faker.random.boolean(),
  identifier: count => R.times(Identifier, count),
  name: count => R.times(HumanName, count),
  telecom: count => R.times(ContactPoint, count),
  gender: () => AdministrativeGender(),
  birthDate: date => getDateBefore(100, date),
  deceasedBoolean: () => faker.random.boolean(),
  deceasedDateTime: date => getDateTimeInPastAfter(date),
  address: count => R.times(Address, count),
  maritalStatus: () => CodeableConcept(),
  multipleBirthBoolean: () => faker.random.boolean(),
  multipleBirthInteger: () => faker.random.number({ min: 0, max: 5 }),
  contact: count => R.times(ContactBackboneElement, count),
};
const availableFields = R.keys(transformer);

export {
  transformer,
  availableFields,
};
