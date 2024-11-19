import { describe, it } from 'vitest';

import { decodeMorseCode } from './morse';

describe('morsecode', () => {
  it('returns hey jude', () => {
    expect(decodeMorseCode('.... . -.--   .--- ..- -.. .')).toMatch('HEY JUDE');
  });
});
