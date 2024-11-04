import { describe, expect, test } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithRouter } from './utils/testUtils'
import path from './constants/path'

describe('App', () => {
  test('App render and navigate page', async () => {
    renderWithRouter()
    // test when the screen show select box language
    await waitFor(() => {
      expect(document.querySelector('.mx-1')?.textContent).toBe('English')
    })

    // test navigate login
    fireEvent.click(screen.getByText(/Login/i))

    await waitFor(() => {
      expect(screen.getByText(/don't have an account yet?/i)).toBeInTheDocument()
    })

    // screen.debug(document.body.parentElement as HTMLElement, 9999999999)
  })

  test('Testing Not Found page', async () => {
    const badRoute = '/some/bad/result'
    renderWithRouter({ route: badRoute })
    await waitFor(() => {
      expect(screen.getByText(/404/i)).toBeInTheDocument()
    })
  })

  test('Render Register page', async () => {
    renderWithRouter({ route: path.register })
    await waitFor(() => {
      expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument()
    })
  })
})
