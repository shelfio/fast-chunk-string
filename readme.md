# fast-chunk-string [![CircleCI](https://img.shields.io/circleci/project/shelfio/fast-chunk-string.svg)](https://circleci.com/gh/shelfio/fast-chunk-string)

> Chunk string into equal substrings with unicode support

Credits to [stackoverflow.com/a/29202760/2727317](https://stackoverflow.com/a/29202760/2727317)

## Install

```
$ yarn add @shelf/fast-chunk-string
```

## Usage

```js
import fastChunkString from '@shelf/fast-chunk-string';

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

Run via `yarn benchmark`. Measured on M2 Max.

```
Running "Without Unicode" suite...
Progress: 100%

  ~33 kb split by 2 kb:
    14 255 401 ops/s, ±0.33%   | 83.34% slower

  ~33 kb split by 1 mb:
    85 581 562 ops/s, ±1.89%   | fastest

  ~330 kb split by 2 kb:
    1 612 589 ops/s, ±0.83%    | 98.12% slower

  ~330 kb split by 1 mb:
    84 876 970 ops/s, ±1.98%   | 0.82% slower

  ~3.3 mb split by 2 kb:
    165 944 ops/s, ±0.62%      | 99.81% slower

  ~3.3 mb split by 1 mb:
    40 975 330 ops/s, ±1.19%   | 52.12% slower

  ~33 mb split by 2 kb:
    11 643 ops/s, ±0.50%       | slowest, 99.99% slower

  ~33 mb split by 1 mb:
    5 444 259 ops/s, ±0.78%    | 93.64% slower

Finished 8 cases!
  Fastest: ~33 kb split by 1 mb
  Slowest: ~33 mb split by 2 kb
Running "Unicode Aware" suite...
Progress: 100%

  ~33 kb split by 2 kb with unicodeAware:
    101.4 ops/s, ±0.95%   | fastest

  ~33 kb split by 1 mb with unicodeAware:
    99.7 ops/s, ±0.84%    | 1.68% slower

  ~330 kb split by 2 kb with unicodeAware:
    10.2 ops/s, ±0.51%    | 89.94% slower

  ~330 kb split by 1 mb with unicodeAware:
    10 ops/s, ±0.55%      | slowest, 90.14% slower

Finished 4 cases!
  Fastest: ~33 kb split by 2 kb with unicodeAware
  Slowest: ~330 kb split by 1 mb with unicodeAware
```

## See Also

- [fast-normalize-spaces](https://github.com/shelfio/fast-normalize-spaces)
- [fast-natural-order-by](https://github.com/shelfio/fast-natural-order-by)
- [fast-uslug](https://github.com/shelfio/fast-uslug)

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
