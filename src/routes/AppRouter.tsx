import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NoMatch } from '@/pages/NoMatch'

interface RouteType {
  key: string;
  path: string;
  element: ReactElement;
}

const routes: RouteType[] = [
  {
    key: 'home',
    path: '/',
    element: <Home />
  },
  {
    key: 'no-match',
    path: '/*',
    element: <NoMatch />
  }
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ key, path, element }: RouteType) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
