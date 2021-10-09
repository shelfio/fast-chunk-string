import fastChunkString from './index';

const text = 'hello my dear world';

it('should export a module', () => {
  expect(fastChunkString).toBeInstanceOf(Function);
});

it('should handle empty string', () => {
  expect(fastChunkString('', {size: 4})).toEqual([]);
});

it('should handle non string', () => {
  expect(fastChunkString(null as any, {size: 4})).toEqual([]);
});

it('should split string into chunks of even number of chars', () => {
  expect(fastChunkString(text, {size: 4})).toEqual(['hell', 'o my', ' dea', 'r wo', 'rld']);
});

it('should split string even if chunk size is larger', () => {
  expect(fastChunkString(text, {size: 4000})).toEqual([text]);
});

it('should split string into chunks of odd number of chars', () => {
  expect(fastChunkString(text, {size: 3})).toEqual(['hel', 'lo ', 'my ', 'dea', 'r w', 'orl', 'd']);
});

it('should split emojis to 1 even if asked for 2', () => {
  expect(fastChunkString('😀😃😄😁', {size: 2})).toEqual(['😀', '😃', '😄', '😁']);
});

it('should split emojis correctly w/ useByteLength option', () => {
  expect(fastChunkString('😀😃😄😁', {size: 2, unicodeAware: true})).toEqual(['😀😃', '😄😁']);
});

it('should split emojis correctly w/ useByteLength option for odd chunk length', () => {
  expect(fastChunkString('😀😃😄', {size: 2, unicodeAware: true})).toEqual(['😀😃', '😄']);
});
