import { describe, expect, it, vi } from 'vitest';
import { DATA_URL, simpleClockIn } from './clock-in';

const dummyData = {
  userId: 1,
  id: 1,
  title: 'Hi!',
  completed: true,
};

describe('simpleClockIn - SPY', () => {
  it('returns data', async () => {
    const mockResponse = {
      ok: true,
      statusText: 'OK',
      json: async () => dummyData,
    } as Response;

    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(mockResponse);

    const response = await simpleClockIn();
    expect(fetchSpy).toHaveBeenCalledWith(DATA_URL);
    expect(response).toBe(dummyData);
  });
});
