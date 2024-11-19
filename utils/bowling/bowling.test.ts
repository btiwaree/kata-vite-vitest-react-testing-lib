import { expect, describe, it, beforeEach } from 'vitest';
import { Bowling } from './bowling';

let game: Bowling;

function rollMany(times: number, score: number) {
  for (let i = 0; i < times; i++) {
    game.roll(score);
  }
}

beforeEach(() => {
  game = new Bowling();
});

describe('Bowling', () => {
  it('all rolls are 0', () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
  });

  it('all rolls are 1', () => {
    rollMany(20, 1);
    expect(game.getScore()).toBe(20);
  });

  it('all rolls are 5', () => {
    rollMany(20, 5);
    expect(game.getScore()).toBe(150);
  });

  it('all rolls are 10', () => {
    rollMany(20, 10);
    expect(game.getScore()).toBe(300);
  });
});
