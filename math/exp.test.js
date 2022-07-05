const exp = require('./exp');

test('squared exponential of 2 to equal 4', () => {
  expect(exp(2)).toBe(4);
});

test('squared exponential of 3 to equal 9', () => {
    expect(exp(3)).toBe(9);
});
