const Benchmark = require('benchmark');
const {fLI} = require('fast-lorem-ipsum');
const fastChunkString = require('./index');

const suite = new Benchmark.Suite();
const words5000 = fLI(5000, 'w');
const words50000 = fLI(50000, 'w');
const words500000 = fLI(500000, 'w');
const words5000000 = fLI(5000000, 'w');

suite
  .add('5000 words (~33 kb) split by 2 kb', () => {
    fastChunkString(words5000, 2 * 1024);
  })
  .add('5000 words (~33 kb) split by 1 mb', () => {
    fastChunkString(words5000, 1024 * 1024);
  })
  .add('50000 words (~330 kb) split by 2 kb', () => {
    fastChunkString(words50000, 2 * 1024);
  })
  .add('50000 words (~330 kb) split by 1 mb', () => {
    fastChunkString(words50000, 1024 * 1024);
  })
  .add('500000 words (~3.3 mb) split by 2 kb', () => {
    fastChunkString(words500000, 2 * 1024);
  })
  .add('500000 words (~3.3 mb) split by 1 mb', () => {
    fastChunkString(words500000, 1024 * 1024);
  })
  .add('5000000 words (~33 mb) split by 2 kb', () => {
    fastChunkString(words5000000, 2 * 1024);
  })
  .add('5000000 words (~33 mb) split by 1 mb', () => {
    fastChunkString(words5000000, 1024 * 1024);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run({async: true});
