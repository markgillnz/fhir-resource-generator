import faker from 'faker';
import R from 'ramda';

import HumanName from '../datatypes/HumanName';
import ContactPoint from '../datatypes/ContactPoint';
import Address from '../datatypes/Address';
import AdministrativeGender from '../datatypes/AdministrativeGender';
import CodeableConcept from '../datatypes/CodeableConcept';

const ContactBackboneElement = () => {
  const relationship = faker.random.number({ min: 1, max: 1 }) ? R.times(CodeableConcept, 1) : '';
  const name = faker.random.number({ min: 1, max: 1 }) ? HumanName() : '';
  const telecom = faker.random.number({ min: 1, max: 1 }) ? R.times(ContactPoint, 1) : '';
  const address = faker.random.number({ min: 1, max: 1 }) ? Address() : '';
  const gender = faker.random.number({ min: 1, max: 1 }) ? AdministrativeGender() : '';

  return R.reject(R.isEmpty, { relationship, name, telecom, address, gender });
};

export default ContactBackboneElement;
