import useRouteElements from './routes/useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'
import Footer from './components/Footer/Footer.tsx'

export function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <>
      <ErrorBoundary>{routeElements}</ErrorBoundary>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ToastContainer />
      <Footer />

    </>
  )
}

export default App
