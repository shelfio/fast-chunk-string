'use strict';

const runes = require('runes');
const stringLength = require('string-length');

module.exports = (str, {size, unicodeAware = false}) => {
  str = str || '';

  if (!unicodeAware) {
    return getChunks(str, size);
  }

  return getChunksUnicode(str, size);
};

function getChunks(str, size) {
  const strLength = str.length;
  const numChunks = Math.ceil(strLength / size);
  const chunks = new Array(numChunks);

  let i = 0;
  let o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

function getChunksUnicode(str, size) {
  const strLength = stringLength(str);
  const numChunks = Math.ceil(strLength / size);
  const chunks = new Array(numChunks);

  let i = 0;
  let o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = runes.substr(str, o, size);
  }

  return chunks;
}
