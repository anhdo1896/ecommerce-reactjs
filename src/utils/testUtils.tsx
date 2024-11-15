import { render } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { AppProvider, getInitialAppContext } from 'src/contexts/app.context'


export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

// export const logScreen = async (
//   body: HTMLElement = document.body.parentElement as HTMLElement,
//   options?: waitForOptions
// ) => {
//   const { timeout = 1000 } = options || {}
//   await waitFor(
//     async () => {
//       expect(await delay(timeout - 100)).toBe(true)
//     },
//     {
//       ...options,
//       timeout
//     }
//   )
//   screen.debug(body, 999999)
// }

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
      mutations: {
        retry: false
      }
    }
  })
  const Provider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  return Provider
}

const Provider = createWrapper()

export const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  const defaultAppContext = getInitialAppContext()
  return {
    ...render(
      <Provider>
        <AppProvider defaultValue={defaultAppContext}>
          <App />
        </AppProvider>
      </Provider>,
      { wrapper: BrowserRouter }
    )
  }
}
