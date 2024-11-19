import { describe, it, expect, vi, beforeEach } from 'vitest';

import { simpleClockIn } from './clock-in';

vi.mock('./clock-in');

describe('simpleClockIn', () => {
  const dummyData = {
    userId: 1,
    id: 1,
    title: 'Hi!',
    completed: true,
  };

  beforeEach(() => {
    vi.mocked(simpleClockIn).mockResolvedValue(dummyData);
  });

  it('runs', async () => {
    expect(await simpleClockIn()).toEqual(dummyData);
  });
});
