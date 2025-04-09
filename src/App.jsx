import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layouts/rootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Picnic from './pages/gallery/Picnic'
import Funfest from './pages/gallery/Funfest'
import Bfw from './pages/gallery/Bfw'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='services' element={<Services />} />
          <Route path='picnic' element={<Picnic />} />
          <Route path='funfest' element={<Funfest />} />
          <Route path='bfw' element={<Bfw />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App