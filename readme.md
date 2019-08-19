# fast-chunk-string [![CircleCI](https://img.shields.io/circleci/project/shelfio/vladgolubev/fast-chunk-string.svg)](https://circleci.com/gh/vladgolubev/fast-chunk-string)

> Chunk string into equal substrings with unicode support

Credits to [stackoverflow.com/a/29202760/2727317](https://stackoverflow.com/a/29202760/2727317)

## Install

```
$ yarn add fast-chunk-string
```

## Usage

```js
const fastChunkString = require('fast-chunk-string');

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

Run via `yarn benchmark`

```
~33 kb split by 2 kb x 1,246,204 ops/sec ±3.08% (75 runs sampled)
~33 kb split by 1 mb x 8,349,993 ops/sec ±0.63% (90 runs sampled)
~330 kb split by 2 kb x 155,141 ops/sec ±1.49% (81 runs sampled)
~330 kb split by 1 mb x 8,311,089 ops/sec ±1.92% (83 runs sampled)
~3.3 mb split by 2 kb x 15,827 ops/sec ±1.56% (86 runs sampled)
~3.3 mb split by 1 mb x 3,741,173 ops/sec ±1.14% (87 runs sampled)
~33 mb split by 2 kb x 1,579 ops/sec ±0.88% (84 runs sampled)
~33 mb split by 1 mb x 738,667 ops/sec ±0.38% (88 runs sampled)
~33 kb split by 2 kb with unicodeAware x 6.24 ops/sec ±2.67% (20 runs sampled)
~33 kb split by 1 mb with unicodeAware x 95.48 ops/sec ±1.01% (67 runs sampled)
~330 kb split by 2 kb with unicodeAware x 0.06 ops/sec ±5.09% (5 runs sampled)
~330 kb split by 1 mb with unicodeAware x 8.34 ops/sec ±3.33% (25 runs sampled)
```

## License

MIT © [Shelf](https://shelf.io)
