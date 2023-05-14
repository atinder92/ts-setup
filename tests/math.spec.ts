import { add, subtract } from '../src/math';

describe('math functions', () => {
  test('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  test('should subtract two numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});
