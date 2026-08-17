import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { ProjectCasePage } from './pages/ProjectCasePage'
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
    element: <ProjectCasePage />,
  },
])
