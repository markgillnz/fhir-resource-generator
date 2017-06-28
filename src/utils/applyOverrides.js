import R from 'ramda';

const applyOverrides = overrides =>
  (resource) => {
    let overridenResource = resource;
    R.forEachObjIndexed((value, key) => {
      const path = R.split('.', key).map(val => R.defaultTo(val, parseInt(val, 10)));
      const lens = R.lensPath(path);
      overridenResource = R.set(lens, value, overridenResource);
    }, overrides);
    return overridenResource;
  };

export default applyOverrides;
