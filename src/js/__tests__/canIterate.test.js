import canIterate from '../functions/canIterate';

test('Iterable', () => {
  expect(canIterate(new Map())).toBe(true);
});

test('No Iterable', () => {
  expect(canIterate(7)).toBe(false);
});

test('No Iterable error', () => {
  expect(canIterate(null)).toBe(false);
});
