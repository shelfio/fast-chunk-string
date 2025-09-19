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
    14 106 903 ops/s, ±1.71%    | 86.19% slower

  ~33 kb split by 1 mb:
    100 461 043 ops/s, ±1.45%   | 1.63% slower

  ~330 kb split by 2 kb:
    1 600 485 ops/s, ±0.63%     | 98.43% slower

  ~330 kb split by 1 mb:
    102 125 168 ops/s, ±1.50%   | fastest

  ~3.3 mb split by 2 kb:
    161 507 ops/s, ±1.19%       | 99.84% slower

  ~3.3 mb split by 1 mb:
    41 773 807 ops/s, ±1.54%    | 59.1% slower

  ~33 mb split by 2 kb:
    11 098 ops/s, ±0.25%        | slowest, 99.99% slower

  ~33 mb split by 1 mb:
    5 506 349 ops/s, ±0.58%     | 94.61% slower

Finished 8 cases!
  Fastest: ~330 kb split by 1 mb
  Slowest: ~33 mb split by 2 kb
Running "Unicode Aware" suite...
Progress: 100%

  ~33 kb split by 2 kb with unicodeAware:
    847 ops/s, ±0.99%   | 12.14% slower

  ~33 kb split by 1 mb with unicodeAware:
    964 ops/s, ±0.25%   | fastest

  ~330 kb split by 2 kb with unicodeAware:
    71 ops/s, ±0.76%    | slowest, 92.63% slower

  ~330 kb split by 1 mb with unicodeAware:
    90 ops/s, ±0.94%    | 90.66% slower

Finished 4 cases!
  Fastest: ~33 kb split by 1 mb with unicodeAware
  Slowest: ~330 kb split by 2 kb with unicodeAware
```

## Recent optimizations — September 2025

September 2025 improvements were delivered autonomously by the gpt-5-codex model. We treated the hot paths like any latency-sensitive service and tuned the slowest sections:

- Single-pass unicode chunking – length and slicing now come from the same `runes()` walk, eliminating the extra `string-length` scan and keeping multicodepoint graphemes intact.
- Consolidated ASCII loop – collapsed the fast path into one traversal with early exits for empty inputs and oversized chunk sizes to trim per-call overhead.
- Fractional-size parity – restored the legacy `slice` coercion semantics so non-integer chunk sizes behave exactly as before, backed by new regression tests.

The result is steadier throughput in the ASCII suite (for example ~33 kb split by 1 mb climbs from 85.6M to 100.5M ops/s) and a 9–10× lift in the unicode-aware scenarios (e.g. 33 kb splits rise from ~101 ops/s to ~964 ops/s) while preserving behaviour for combining marks and emoji ligatures.

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
