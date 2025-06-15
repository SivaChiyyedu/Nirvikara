// import { useState } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
    
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/home',
      element: <Home />
    },

    {
      path: '/about',
      element: <About/>
    },

    {
      path: '/service',
      element: <Service/>
    },

    {
      path: '/contact',
      element: <Contact/>
    },

    {
      path: '/gallery',
      element: <Gallery/>
    },

    {
      path: '/blog',
      element: <Blog/>
    }
  ]
    }
  ])
  return (
  
  <RouterProvider router={router} />
  )
  
  
}

export default App;
