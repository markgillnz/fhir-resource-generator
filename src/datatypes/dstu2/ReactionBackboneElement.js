import faker from 'faker';

import AllergyIntoleranceCertainty from './AllergyIntoleranceCertainty';
import AllergyIntoleranceSeverity from './AllergyIntoleranceSeverity';
import CodeableConcept from './CodeableConcept';
import { getDateTimeInPast } from '../../utils/datetime';

const ReactionBackboneElement = () => ({
  substance: CodeableConcept(),
  certainty: AllergyIntoleranceCertainty(),
  manifestation: [CodeableConcept()],
  description: faker.random.words(),
  onset: getDateTimeInPast(),
  severity: AllergyIntoleranceSeverity(),
  exposureRoute: CodeableConcept(),
});

export default ReactionBackboneElement;
