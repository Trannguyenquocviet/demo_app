import { useRoutes } from 'react-router-dom'
import Home from 'src/pages/Home'
import About from 'src/pages/About'
export default function useRoutesElements() {
  const routeElements = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
  ])
  return routeElements
}
