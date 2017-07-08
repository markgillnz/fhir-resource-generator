import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';
import { transformer, availableFields } from '../../transformers/dstu2/extension';

const extension = (fields, overrides) => R.compose(
  R.flatten,
  R.values,
  applyOverrides(overrides),
  R.mapObjIndexed(transformer),
  R.ifElse(
    R.isNil,
    () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
    R.pick(availableFields.concat('extension')),
  ),
)(fields);

export default extension;
