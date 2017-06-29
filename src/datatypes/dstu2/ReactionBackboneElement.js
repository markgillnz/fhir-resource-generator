import faker from 'faker';
import R from 'ramda';

import AllergyIntoleranceCertainty from './AllergyIntoleranceCertainty';
import AllergyIntoleranceSeverity from './AllergyIntoleranceSeverity';
import CodeableConcept from './CodeableConcept';
import { getDateTimeInPast } from '../../utils/datetime';

const ReactionBackboneElement = () => ({
  substance: CodeableConcept(),
  certainty: AllergyIntoleranceCertainty(),
  manifestation: R.times(CodeableConcept, 1),
  description: faker.lorem.sentence(),
  onset: getDateTimeInPast(),
  severity: AllergyIntoleranceSeverity(),
  exposureRoute: CodeableConcept(),
});

export default ReactionBackboneElement;
