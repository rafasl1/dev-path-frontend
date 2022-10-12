import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Header } from './components/Header/Header'
import { FindYourPath } from './pages/FindYourPath/FindYourPath'
import { Home } from './pages/Home/Home'
import { MentoringPage } from './pages/MentoringPage/MentoringPage'
import { Trail } from './pages/Trail/Trail'
import { backendTrail } from './mocks/backendTrail'

const router =  createBrowserRouter([
  { 
    path: "/",
    element: <Home />
  },
  { 
    path: "/mentoring",
    element: <MentoringPage />
  },
  { 
    path: "/find-your-path",
    element: <FindYourPath />
  },
  { 
    path: "/find-your-path/trail",
    element: <Trail {...backendTrail}/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
