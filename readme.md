# fast-chunk-string [![Build Status](https://travis-ci.org/vladgolubev/fast-chunk-string.svg?branch=master)](https://travis-ci.org/vladgolubev/fast-chunk-string)

> Chunk string into equal substrings

Credits to [stackoverflow.com/a/29202760/2727317](https://stackoverflow.com/a/29202760/2727317)

## Install

```
$ yarn add fast-chunk-string
```

## Usage

```js
const fastChunkString = require('fast-chunk-string');

fastChunkString('unicorns', {size: 2});
// => ['un', 'ic', 'or', 'ns']
```

## Benchmarks

Run via `yarn benchmark`

```
5000 words (~33 kb) split by 2 kb x 1,484,958 ops/sec ±0.73% (86 runs sampled)
5000 words (~33 kb) split by 1 mb x 10,276,570 ops/sec ±1.03% (86 runs sampled)
50000 words (~330 kb) split by 2 kb x 177,324 ops/sec ±1.22% (84 runs sampled)
50000 words (~330 kb) split by 1 mb x 10,432,427 ops/sec ±0.62% (84 runs sampled)
500000 words (~3.3 mb) split by 2 kb x 18,309 ops/sec ±0.68% (88 runs sampled)
500000 words (~3.3 mb) split by 1 mb x 4,423,083 ops/sec ±0.71% (82 runs sampled)
5000000 words (~33 mb) split by 2 kb x 1,827 ops/sec ±0.39% (88 runs sampled)
5000000 words (~33 mb) split by 1 mb x 843,575 ops/sec ±0.50% (87 runs sampled)
```

## License

MIT © [Vlad Holubiev](https://vladholubiev.com)
