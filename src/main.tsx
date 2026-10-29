import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Academics from './pages/Academics.tsx'
import Admissions from './pages/Admissions.tsx'
import Student from './pages/Student.tsx'
import Contact from './pages/Contact.tsx'

const routes = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "AboutUs",
        element : <AboutUs />
      },
      {
        path : "Academics",
        element : <Academics />
      },
      {
        path : "Admissions",
        element : <Admissions />
      },
      {
        path : "Student",
        element : <Student />
      },
      {
        path : "Contact",
        element : <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </StrictMode>,
)
