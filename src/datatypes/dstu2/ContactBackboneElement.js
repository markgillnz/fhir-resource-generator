import HumanName from './HumanName';
import ContactPoint from './ContactPoint';
import Address from './Address';
import AdministrativeGender from './AdministrativeGender';
import CodeableConcept from './CodeableConcept';

const ContactBackboneElement = () => ({
  relationship: [CodeableConcept()],
  name: HumanName(),
  telecom: [ContactPoint()],
  address: Address(),
  gender: AdministrativeGender(),
});

export default ContactBackboneElement;
