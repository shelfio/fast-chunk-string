const m = require('.');

const text = 'hello my dear world';

it('should export a module', () => {
  expect(m).toBeInstanceOf(Function);
});

it('should split string into chunks of even number  of chars', () => {
  expect(m(text, {size: 4})).toEqual(['hell', 'o my', ' dea', 'r wo', 'rld']);
});

it('should split string into chunks of odd number  of chars', () => {
  expect(m(text, {size: 3})).toEqual(['hel', 'lo ', 'my ', 'dea', 'r w', 'orl', 'd']);
});

it('should split emojis', () => {
  expect(m('😀😃😄😁', {size: 2})).toEqual(['😀', '😃', '😄', '😁']);
});
