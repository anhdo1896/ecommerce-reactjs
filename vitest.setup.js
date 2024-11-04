import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { userMock } from './src/msw/user.msw'
import { productMock } from './src/msw/product.msw'
import { cartMock } from './src/msw/cart.msw'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

export const restHandlers = [...userMock, ...productMock, ...cartMock]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
