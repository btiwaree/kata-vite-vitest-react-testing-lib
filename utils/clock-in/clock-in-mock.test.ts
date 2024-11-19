import { describe, expect, it, vi } from 'vitest';
import { simpleClockIn } from './clock-in';

const dummyData = {
  userId: 1,
  id: 1,
  title: 'Hi!',
  completed: true,
};

describe('simpleClockIn - MOCK', () => {
  it('returns data', async () => {
    const mockResponse = {
      ok: true,
      statusText: 'OK',
      json: async () => dummyData,
    } as Response;

    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

    const data = await simpleClockIn();
    expect(data).toEqual(dummyData);
  });
});
