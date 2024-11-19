import { describe, it, expect } from 'vitest';
import Rover from './App';

describe('Rover Initialization', () => {
  it('should initialize with the correct starting coordinates and direction', () => {
    const rover = new Rover(0, 0, 'N');
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);
    expect(rover.direction).toBe('N');
  });

  it('should not initialize when coordinates are not numbers', () => {
    expect(() => new Rover('A', 'B', 'N')).toThrowError(
      'Invalid coordinates: x and y must be numbers.',
    );
  });

  it('should only work for valid directions', () => {
    expect(() => new Rover(0, 0, 'A')).toThrowError(
      'Invalid direction: A. Direction must be one of N, S, E, W.',
    );
  });

  it('should execute commands ', () => {});
});

describe('Rover Commands', () => {
  it('should process a single command to turn left', () => {
    const rover = new Rover(0, 0, 'N');
    rover.receiveCommands('l');
    expect(rover.direction).toBe('W');
  });

  it('should process a single command to turn right', () => {
    const rover = new Rover(0, 0, 'N');
    rover.receiveCommands('r');
    expect(rover.direction).toBe('E');
  });

  it('should process a single command to move forward', () => {
    const rover = new Rover(0, 0, 'N');
    rover.receiveCommands('f');
    expect(rover.y).toBe(1);
    expect(rover.x).toBe(0);
  });

  it('should process a single command to move backward', () => {
    const rover = new Rover(0, 0, 'N');
    rover.receiveCommands('b');
    expect(rover.y).toBe(-1);
    expect(rover.x).toBe(0);
  });

  it('should process a sequence of commands', () => {
    const rover = new Rover(0, 0, 'N');
    rover.receiveCommands('frfrflfrblfb');
    expect(rover.x).toBe(2);
    expect(rover.y).toBe(1);
    expect(rover.direction).toBe('E');
  });

  //   it('should throw an error if an invalid command is received', () => {
  //     const rover = new Rover(0, 0, 'N');
  //     expect(() => rover.receiveCommands('x')).toThrowError('Invalid command: x');
  // });
});
