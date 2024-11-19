import { describe, it } from 'vitest';
import { accum } from './accum';

describe('mumbling', () => {
  it('should run for abcd', () => {
    expect(accum('abcd')).toEqual('A-Bb-Ccc-Dddd');
  });

  it('should run for RqaEzty', () => {
    expect(accum('RqaEzty')).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
  });
});
