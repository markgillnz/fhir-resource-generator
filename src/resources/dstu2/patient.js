import faker from 'faker';
import moment from 'moment';
import R from 'ramda';

import HumanName from '../../datatypes/dstu2/HumanName';
import Identifier from '../../datatypes/dstu2/Identifier';
import ContactPoint from '../../datatypes/dstu2/ContactPoint';
import Address from '../../datatypes/dstu2/Address';
import AdministrativeGender from '../../datatypes/dstu2/AdministrativeGender';
import ContactBackboneElement from '../../datatypes/dstu2/ContactBackboneElement';

const generators = {
  id: () => faker.random.uuid(),
  identifier: () => Identifier(),
  active: () => faker.random.boolean(),
  name: () => HumanName(),
  telecom: () => ContactPoint(),
  gender: () => AdministrativeGender(),
  birthDate: () => moment(faker.date.past(100)).format('YYYY-MM-DD'),
  address: () => Address(),
  contact: () => ContactBackboneElement(),
};

const patient = R.compose(
  R.merge({ resourceType: 'Patient' }),
  R.evolve(generators),
  R.zipObj(R.__, R.repeat(undefined, 3)), // eslint-disable-line no-underscore-dangle
);

export default patient;
