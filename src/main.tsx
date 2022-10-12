import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Header } from './components/Header/Header'
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
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
