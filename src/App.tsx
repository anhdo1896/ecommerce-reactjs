import { Fragment } from 'react/jsx-runtime'
import useRouteElements from './routes/useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'

export function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)
  
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return <Fragment>{routeElements}</Fragment>
}

export default App
