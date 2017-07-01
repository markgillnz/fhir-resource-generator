import R from 'ramda';
import faker from 'faker';

import CodeableConcept from '../../datatypes/dstu2/CodeableConcept';
import Identifier from '../../datatypes/dstu2/Identifier';
import AllergyIntoleranceStatus from '../../datatypes/dstu2/AllergyIntoleranceStatus';
import AllergyIntoleranceCriticality from '../../datatypes/dstu2/AllergyIntoleranceCriticality';
import AllergyIntoleranceType from '../../datatypes/dstu2/AllergyIntoleranceType';
import AllergyIntoleranceCategory from '../../datatypes/dstu2/AllergyIntoleranceCategory';
import ReactionBackboneElement from '../../datatypes/dstu2/ReactionBackboneElement';
import Reference from '../../datatypes/dstu2/Reference';
import { getDateTimeInPast } from '../../utils/datetime';

const transformer = {
  identifier: count => R.times(Identifier, count),
  onset: () => getDateTimeInPast(),
  recordedDate: () => getDateTimeInPast(),
  recorder: () => Reference(faker.random.arrayElement(['Practitioner', 'Patient'])),
  patient: () => Reference('Patient'),
  reporter: () => Reference(faker.random.arrayElement(['Practitioner', 'Patient', 'RelatedPerson'])),
  substance: () => CodeableConcept(),
  status: () => AllergyIntoleranceStatus(),
  criticality: () => AllergyIntoleranceCriticality(),
  type: () => AllergyIntoleranceType(),
  category: () => AllergyIntoleranceCategory(),
  lastOccurrence: () => getDateTimeInPast(),
  reaction: count => R.times(ReactionBackboneElement, count),
};
const availableFields = R.keys(transformer);

export {
  transformer,
  availableFields,
};
