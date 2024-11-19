import { describe, it, expect, beforeEach } from 'vitest';
import { ChristmasLight } from './christmas-lights';

describe('christmas-lights', () => {
  let christmasLights: ChristmasLight;

  beforeEach(() => {
    christmasLights = new ChristmasLight();
  });

  it('0,0 is OFF by default', () => {
    const state = christmasLights.getState(0, 0);
    expect(state).toBeFalsy();
  });

  it('0,0 can be turned ON', () => {
    christmasLights.turnOn(0, 0);
    const isOn = christmasLights.isOn(0, 0);

    expect(isOn).toBeTruthy();
  });

  it('0,0 can be toggled', () => {
    christmasLights.toggle(0, 0);
    const newState = christmasLights.getState(0, 0);

    expect(newState).toBeTruthy();
  });

  it('can toggle range', () => {
    const state = christmasLights.toggleRange([0, 0], [0, 4]);
    expect(state).toBeFalsy();
  });

  it('getNumberOfLitLights to be 25', () => {
    christmasLights.toggleRange([0, 0], [4, 4]);
    const state = christmasLights.getNumberOfLitLights();

    expect(state).toBe(25);
  });
});
