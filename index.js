'use strict';

const runes = require('runes');
const stringLength = require('string-length');

module.exports = (str, {size, unicodeAware = false}) => {
  const strLength = unicodeAware ? stringLength(str) : str.length;
  const numChunks = Math.ceil(strLength / size);
  const chunks = new Array(numChunks);

  let i = 0;
  let o = 0;

  for (; i < numChunks; ++i, o += size) {
    if (unicodeAware) {
      chunks[i] = runes.substr(str, o, size);
    } else {
      chunks[i] = str.substr(o, size);
    }
  }

  return chunks;
};
