'use strict';

module.exports = (str, {size}) => {
  // TODO use unicode-aware string length
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  let i = 0;
  let o = 0;
  for (; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};
