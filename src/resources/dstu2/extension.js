import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';
import { transformer, availableFields } from '../../transformers/dstu2/extension';

const extension = (fields, overrides) => R.compose(
  applyOverrides(overrides),
  R.flatten,
  R.values,
  R.mapObjIndexed(transformer),
  R.ifElse(
    R.isNil,
    () => R.zipObj(availableFields, R.repeat(1, availableFields.length)),
    R.compose(
      R.fromPairs,
      R.filter(R.apply(key => R.contains(key, availableFields.concat('extension')))),
      R.toPairs,
    ),
  ),
)(fields);

export default extension;
