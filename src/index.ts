import runes from 'runes';

function fastChunkString(
  original: string,
  {
    size,
    unicodeAware = false,
  }: {
    size: number;
    unicodeAware?: boolean;
  },
): string[] {
  const str = original || '';

  if (str.length === 0) {
    return [];
  }

  if (!unicodeAware) {
    return getChunks(str, size);
  }

  return getChunksUnicode(str, size);
}

function getChunks(str: string, size: number): string[] {
  const strLength = str.length;

  if (strLength === 0) {
    return [];
  }

  if (size >= strLength) {
    return [str];
  }

  const numChunks = Math.ceil(strLength / size);
  const chunks = new Array<string>(numChunks);

  for (let index = 0, offset = 0; index < numChunks; index += 1, offset += size) {
    chunks[index] = str.substr(offset, size);
  }

  return chunks;
}

function getChunksUnicode(str: string, size: number): string[] {
  const runeChars = runes(str);
  const runeCount = runeChars.length;

  if (runeCount === 0) {
    return [];
  }

  if (size >= runeCount) {
    return [str];
  }

  const numChunks = Math.ceil(runeCount / size);
  const chunks = new Array<string>(numChunks);

  for (let index = 0, offset = 0; index < numChunks; index += 1, offset += size) {
    const start = Math.min(Math.floor(offset), runeCount);
    const end = Math.min(Math.floor(offset + size), runeCount);

    let chunk = '';

    for (let i = start; i < end; i += 1) {
      chunk += runeChars[i];
    }

    chunks[index] = chunk;
  }

  return chunks;
}
export default fastChunkString;
