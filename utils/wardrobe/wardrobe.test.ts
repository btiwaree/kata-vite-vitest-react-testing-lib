import { describe, it } from 'vitest';

import { allCombinations } from './wardrobe.ts';

describe('wardrobe', () => {
  it('allCombination', () => {
    const combinations = allCombinations();

    expect(combinations).toEqual([]);
  });
});
