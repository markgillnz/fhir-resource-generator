import faker from 'faker';
import R from 'ramda';

import HumanName from './HumanName';
import ContactPoint from './ContactPoint';
import Address from './Address';
import AdministrativeGender from './AdministrativeGender';
import CodeableConcept from './CodeableConcept';

const ContactBackboneElement = () => {
  const relationship = faker.random.number({ min: 1, max: 1 }) ? R.times(CodeableConcept, 1) : '';
  const name = faker.random.number({ min: 1, max: 1 }) ? HumanName() : '';
  const telecom = faker.random.number({ min: 1, max: 1 }) ? R.times(ContactPoint, 1) : '';
  const address = faker.random.number({ min: 1, max: 1 }) ? Address() : '';
  const gender = faker.random.number({ min: 1, max: 1 }) ? AdministrativeGender() : '';

  return R.reject(R.isEmpty, { relationship, name, telecom, address, gender });
};

export default ContactBackboneElement;
