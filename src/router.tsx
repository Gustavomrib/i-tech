import { createBrowserRouter } from 'react-router-dom'

import { RoutePlaceholder } from './pages/RoutePlaceholder'
import { SystemPreviewPage } from './pages/SystemPreviewPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SystemPreviewPage />,
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
