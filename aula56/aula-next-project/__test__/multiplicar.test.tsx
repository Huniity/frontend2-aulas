import { describe, it, expect } from '@jest/globals'

const multiplicar = (a: number, b: number): number => {
  return a * b
}

describe('Multiplicar', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiplicar(2, 3)).toBe(6)
  })
})