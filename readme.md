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

Run via `yarn benchmark`. Measured on Macbook Pro 16" with M1 Max processor.

```
Running "Without Unicode" suite...
Progress: 100%

  ~33 kb split by 2 kb:
    14 384 027 ops/s, ±0.21%    | 86.51% slower

  ~33 kb split by 1 mb:
    106 655 332 ops/s, ±0.12%   | fastest

  ~330 kb split by 2 kb:
    1 482 220 ops/s, ±0.34%     | 98.61% slower

  ~330 kb split by 1 mb:
    106 442 883 ops/s, ±0.14%   | 0.2% slower

  ~3.3 mb split by 2 kb:
    153 356 ops/s, ±0.19%       | 99.86% slower

  ~3.3 mb split by 1 mb:
    48 824 019 ops/s, ±0.16%    | 54.22% slower

  ~33 mb split by 2 kb:
    14 312 ops/s, ±0.28%        | slowest, 99.99% slower

  ~33 mb split by 1 mb:
    7 059 008 ops/s, ±0.32%     | 93.38% slower

Finished 8 cases!
  Fastest: ~33 kb split by 1 mb
  Slowest: ~33 mb split by 2 kb
Running "Unicode Aware" suite...
Progress: 100%

  ~33 kb split by 2 kb with unicodeAware:
    450 ops/s, ±0.24%   | fastest

  ~33 kb split by 1 mb with unicodeAware:
    428 ops/s, ±0.36%   | 4.89% slower

  ~330 kb split by 2 kb with unicodeAware:
    45 ops/s, ±0.38%    | 90% slower

  ~330 kb split by 1 mb with unicodeAware:
    41 ops/s, ±0.42%    | slowest, 90.89% slower

Finished 4 cases!
  Fastest: ~33 kb split by 2 kb with unicodeAware
  Slowest: ~330 kb split by 1 mb with unicodeAware
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
