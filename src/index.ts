import runes from 'runes';
import stringLength from 'string-length';

export default function fastChunkString(
  str: string,
  {
    size,
    unicodeAware = false
  }: {
    size: number;
    unicodeAware?: boolean;
  }
): string[] {
  str = str || '';
  if (!unicodeAware) {
    return getChunks(str, size);
  }

  return getChunksUnicode(str, size);
}

function getChunks(str: string, size: number): string[] {
  const strLength: number = str.length;
  const numChunks: number = Math.ceil(strLength / size);
  const chunks: string[] = new Array(numChunks);

  let i = 0;
  let o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

function getChunksUnicode(str: string, size: number): string[] {
  const strLength: number = stringLength(str);
  const numChunks: number = Math.ceil(strLength / size);
  const chunks: string[] = new Array(numChunks);

  let i = 0;
  let o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = runes.substr(str, o, size);
  }

  return chunks;
}
module.exports = fastChunkString;
