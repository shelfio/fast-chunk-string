# fast-chunk-string [![CircleCI](https://img.shields.io/circleci/project/shelfio/fast-chunk-string.svg)](https://circleci.com/gh/shelfio/fast-chunk-string)

> Chunk string into equal substrings with unicode support

Credits to [stackoverflow.com/a/29202760/2727317](https://stackoverflow.com/a/29202760/2727317)

## Install

```
$ yarn add @shelf/fast-chunk-string
```

## Usage

```js
const fastChunkString = require('@shelf/fast-chunk-string');

// the fastest way
fastChunkString('unicorns', {size: 2, unicodeAware: false});
// => ['un', 'ic', 'or', 'ns']

// ignore unicode, still fast but inaccurate
fastChunkString('😀😃😄😁', {size: 2, unicodeAware: false});
// => ['😀', '😃', '😄', '😁']

// respect unicode, slow but accurate
fastChunkString('😀😃😄😁', {size: 2, unicodeAware: true});
// => ['😀😃', '😄😁']
```

## Benchmarks

Run via `yarn benchmark`. Measured on Macbook Pro 13" with M1 processor.

```
~33 kb split by 2 kb x 8,902,281 ops/sec ±0.37% (97 runs sampled)
~33 kb split by 1 mb x 100,872,434 ops/sec ±0.65% (92 runs sampled)
~330 kb split by 2 kb x 1,009,220 ops/sec ±0.89% (95 runs sampled)
~330 kb split by 1 mb x 97,087,201 ops/sec ±5.51% (90 runs sampled)
~3.3 mb split by 2 kb x 102,498 ops/sec ±1.74% (97 runs sampled)
~3.3 mb split by 1 mb x 33,719,853 ops/sec ±2.55% (94 runs sampled)
~33 mb split by 2 kb x 9,953 ops/sec ±1.21% (95 runs sampled)
~33 mb split by 1 mb x 4,976,079 ops/sec ±1.22% (94 runs sampled)
~33 kb split by 2 kb with unicodeAware x 37.98 ops/sec ±0.16% (65 runs sampled)
~33 kb split by 1 mb with unicodeAware x 355 ops/sec ±0.29% (89 runs sampled)
~330 kb split by 2 kb with unicodeAware x 0.40 ops/sec ±1.19% (5 runs sampled)
~330 kb split by 1 mb with unicodeAware x 34.99 ops/sec ±0.91% (61 runs sampled)
```

## License

MIT © [Shelf](https://shelf.io)
