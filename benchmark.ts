import benny from 'benny';
import fLI from 'fast-lorem-ipsum';
import fastChunkString from './lib';

const words5000 = fLI(5000, 'w');
const words50000 = fLI(50000, 'w');
const words500000 = fLI(500000, 'w');
const words5000000 = fLI(5000000, 'w');

benny.suite(
  'Without Unicode',
  benny.add('~33 kb split by 2 kb', () => {
    fastChunkString(words5000, {size: 2 * 1024});
  }),
  benny.add('~33 kb split by 1 mb', () => {
    fastChunkString(words5000, {size: 1024 * 1024});
  }),
  benny.add('~330 kb split by 2 kb', () => {
    fastChunkString(words50000, {size: 2 * 1024});
  }),
  benny.add('~330 kb split by 1 mb', () => {
    fastChunkString(words50000, {size: 1024 * 1024});
  }),
  benny.add('~3.3 mb split by 2 kb', () => {
    fastChunkString(words500000, {size: 2 * 1024});
  }),
  benny.add('~3.3 mb split by 1 mb', () => {
    fastChunkString(words500000, {size: 1024 * 1024});
  }),
  benny.add('~33 mb split by 2 kb', () => {
    fastChunkString(words5000000, {size: 2 * 1024});
  }),
  benny.add('~33 mb split by 1 mb', () => {
    fastChunkString(words5000000, {size: 1024 * 1024});
  }),
  benny.cycle(),
  benny.complete()
);

benny.suite(
  'Unicode Aware',
  benny.add('~33 kb split by 2 kb with unicodeAware', () => {
    fastChunkString(words5000, {size: 2 * 1024, unicodeAware: true});
  }),
  benny.add('~33 kb split by 1 mb with unicodeAware', () => {
    fastChunkString(words5000, {size: 1024 * 1024, unicodeAware: true});
  }),
  benny.add('~330 kb split by 2 kb with unicodeAware', () => {
    fastChunkString(words50000, {size: 2 * 1024, unicodeAware: true});
  }),
  benny.add('~330 kb split by 1 mb with unicodeAware', () => {
    fastChunkString(words50000, {size: 1024 * 1024, unicodeAware: true});
  }),
  benny.cycle(),
  benny.complete()
);
