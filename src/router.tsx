import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { ProjectDetailPlaceholder } from './pages/ProjectDetailPlaceholder'
import { ProjectsPage } from './pages/ProjectsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projetos',
    element: <ProjectsPage />,
  },
  {
    path: '/projetos/:slug',
    element: <ProjectDetailPlaceholder />,
  },
])
