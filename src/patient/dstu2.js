import faker from 'faker';
import R from 'ramda';
import moment from 'moment';

import HumanName from '../datatypes/HumanName';
import Identifier from '../datatypes/Identifier';
import ContactPoint from '../datatypes/ContactPoint';
import Address from '../datatypes/Address';
import AdministrativeGender from '../datatypes/AdministrativeGender';
import CodeableConcept from '../datatypes/CodeableConcept';
import ContactBackboneElement from '../datatypes/ContactBackboneElement';

const fhirPatient = () => {
  const birthDate = moment(faker.date.past(100)).format('YYYY-MM-DD');
  return {
    resourceType: 'Patient',
    id: faker.random.uuid(),
    identifier: faker.random.number({ min: 1, max: 1 }) ? R.times(Identifier, 1) : '',
    active: faker.random.number({ min: 1, max: 1 }) ? faker.random.boolean() : '',
    name: faker.random.number({ min: 1, max: 1 }) ? R.times(HumanName, 1) : '',
    telecom: faker.random.number({ min: 1, max: 1 }) ? R.times(ContactPoint, 1) : '',
    gender: faker.random.number({ min: 1, max: 1 }) ? AdministrativeGender() : '',
    birthDate: faker.random.number({ min: 1, max: 1 }) ? birthDate : '',
    deceasedBoolean: faker.random.number({ min: 1, max: 1 }) ? faker.random.boolean() : '',
    deceasedDateTime: faker.random.number({ min: 1, max: 1 }) ? faker.date.between(birthDate, moment()) : '',
    address: faker.random.number({ min: 1, max: 1 }) ? R.times(Address, 1) : '',
    maritalStatus: faker.random.number({ min: 1, max: 1 }) ? CodeableConcept() : '',
    multipleBirthBoolean: faker.random.number({ min: 1, max: 1 }) ? faker.random.boolean() : '',
    multipleBirthInteger: faker.random.number({ min: 1, max: 1 }) ? faker.random.number({ min: 1, max: 3 }) : '',
    contact: faker.random.number({ min: 1, max: 1 }) ? R.times(ContactBackboneElement, 1) : '',
  };
};

export default fhirPatient;
