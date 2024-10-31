import { describe, it, expect } from 'vitest'
import { isAxiosError } from '../utils'
import { AxiosError } from 'axios'

describe('isAxiosError', () => {
  it('isAxiosError return to boolean', () => {
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})


