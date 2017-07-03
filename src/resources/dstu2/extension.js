import R from 'ramda';

import applyOverrides from '../../utils/applyOverrides';

const extension = (type, overrides) => R.compose(
  applyOverrides(overrides),
  module => R.call(module.default),
  require,
)(`../../datatypes/dstu2/extensions/${type}Extension`);

export default extension;
