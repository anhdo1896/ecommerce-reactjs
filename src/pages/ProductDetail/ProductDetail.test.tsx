import { delay, renderWithRouter } from 'src/utils/testUtils'
import { describe } from 'vitest'

describe('ProductDetail', () => {
  test('Render UI ProductDetail', async () => {
    renderWithRouter({
      route: '/A-versatile-running-shoe-that-takes-a-performance-look-and-gives-it-a-stylish-lifestyle-twist-i-1033'
    })
    await delay(1000)
    expect(document.body).toMatchSnapshot()
  })
})
