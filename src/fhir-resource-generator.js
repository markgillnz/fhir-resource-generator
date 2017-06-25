import patient from './patient/patient';

const frg = {
  patient,
};

console.log(JSON.stringify(frg.patient.dstu2(), null, 2));

export default frg;
