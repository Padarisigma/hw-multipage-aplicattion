import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './pages/blog'
import Details from './pages/details'
import Home from './pages/home'
import Layout from './layout/layout'
import './App.css'
import Contact from './pages/contact'
import Pricing from './pages/pricing'
import About from './pages/about'

function App() {
  const router=createBrowserRouter( [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/details',
          element: <Details/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/pricing',
          element: <Pricing/>
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ])
  return (
    <>
     < RouterProvider router={router}/>
    </>
  )
}

export default App
