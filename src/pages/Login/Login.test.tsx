import { describe, expect } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { renderWithRouter } from 'src/utils/testUtils'


describe('Login', () => {
  beforeEach(async () => {
    renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
      expect(screen.queryByPlaceholderText('Password')).toBeInTheDocument()
    })
  })

  it('Checking required fields in the Login form', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    fireEvent.submit(submitButton)
    await waitFor(() => {
      expect(screen.queryByText('Email is required')).toBeTruthy()
      expect(screen.queryByText('Password is required')).toBeTruthy()
    })
  })

  it('Checking input error in the Login form', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    const email = document.querySelector('form input[type="email"]') as HTMLElement
    const password = document.querySelector('form input[type="password"]') as HTMLElement

    fireEvent.change(email, {
      target: {
        value: 'test@'
      }
    })

    fireEvent.change(password, {
      target: {
        value: '123'
      }
    })
    fireEvent.submit(submitButton)
    await waitFor(() => {
      expect(screen.queryByText('Invalid email address')).toBeTruthy()
      expect(screen.queryByText('Password must be at least 5 characters')).toBeTruthy()
    })
  })

  it('Checking submit in the Login form', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    const email = document.querySelector('form input[type="email"]') as HTMLElement
    const password = document.querySelector('form input[type="password"]') as HTMLElement

    fireEvent.change(email, {
      target: {
        value: 'anhdo@gmail.com'
      }
    })

    fireEvent.change(password, {
      target: {
        value: 'Admin@123'
      }
    })

    await waitFor(() => {
      expect(screen.queryByText('Invalid email address')).toBeFalsy()
      expect(screen.queryByText('Password must be at least 5 characters')).toBeFalsy()
    })
    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(document.querySelector('span')?.textContent).toBe('English')
    })
  })
})
