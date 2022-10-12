import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Header } from './components/Header/Header'
import { FindYourPath } from './pages/FindYourPath/FindYourPath'
import { Home } from './pages/Home/Home'
import { MentoringPage } from './pages/MentoringPage/MentoringPage'

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
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
