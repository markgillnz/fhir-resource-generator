/* eslint-disable no-console */
import generator from './src';

console.log(JSON.stringify(generator.dstu2.patient(), null, 2));
console.log(JSON.stringify(generator.dstu2.allergyIntolerance(), null, 2));
console.log(JSON.stringify(generator.dstu2.extension(), null, 2));
