import applyOverrides from '../../src/utils/applyOverrides';

test('returns a function', () => {
  expect(applyOverrides()).toBeInstanceOf(Function);
});

test('returns the original resource plus the overrides when passed a resource containing no keys to overrides', () => {
  const resource = { one: 'one', two: 'two' };
  const overrides = { three: 'three' };
  expect(applyOverrides(overrides)(resource)).toEqual(Object.assign(resource, overrides));
});

test('overwrites the value of keys in the resource with the override values', () => {
  const resource = { one: 'one', two: 'two' };
  const overrides = { two: 'three' };
  expect(applyOverrides(overrides)(resource)).toEqual({ one: 'one', two: 'three' });
});

test('deeply overwrites the value of keys in an object within the resource with the override values', () => {
  const resource = { one: 'one', two: { three: 'three' } };
  const overrides = { 'two.three': 'two' };
  expect(applyOverrides(overrides)(resource)).toEqual({ one: 'one', two: { three: 'two' } });
});

test('deeply overwrites the value of keys in an array within the resource with the override values', () => {
  const resource = { one: 'one', two: [{ three: 'three' }] };
  const overrides = { 'two.0.three': 'two' };
  expect(applyOverrides(overrides)(resource)).toEqual({ one: 'one', two: [{ three: 'two' }] });
});
