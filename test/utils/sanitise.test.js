import sanitise from '../../src/utils/sanitise';

test('returns a function', () => {
  expect(sanitise()).toBeInstanceOf(Function);
});

test('returns the original resource when passed a resource containing only 1 of the keys to sanitise', () => {
  const resource = { one: 'one', three: 'three' };
  expect(sanitise([['one', 'two']])(resource)).toEqual(resource);
});

test('removes all but 1 of the keys to sanitise when passed a resource containing more than 1 keys to sanitise', () => {
  const resource = { one: 'one', two: 'two', three: 'three' };
  const actual = sanitise([['one', 'two']])(resource);
  expect(Object.keys(actual)).toHaveLength(2);
  expect(actual).toHaveProperty('three');
});

test('operates on multiple lists of keys to sanitise independently', () => {
  const resource = { one: 'one', two: 'two', three: 'three', four: 'four' };
  const actual = sanitise([['one', 'two'], ['three', 'five']])(resource);
  expect(Object.keys(actual)).toHaveLength(3);
  expect(actual).toHaveProperty('three');
  expect(actual).toHaveProperty('four');
});
