import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { RoutePlaceholder } from './pages/RoutePlaceholder'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projetos',
    element: <RoutePlaceholder route="/projetos" />,
  },
  {
    path: '/projetos/:slug',
    element: <RoutePlaceholder route="/projetos/:slug" />,
  },
])
