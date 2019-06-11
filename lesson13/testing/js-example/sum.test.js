const sum = require('./sum');

test('sum of 2 and 3 should be 5', () => {
    expect(sum(2, 3)).toBe(5)
})

const array = ['a', 'b', 'c'];

test('array lenght should be 3', () => {
    expect(array).toHaveLength(3);
})