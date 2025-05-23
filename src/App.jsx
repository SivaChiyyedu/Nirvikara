// import { useState } from "react";


import Atta from "./pages/Atta.jsx";
import Ghee from "./pages/Ghee.jsx";


import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewLaunch from "./pages/NewLaunch.jsx";
import Oil from "./pages/oil.jsx";
import Sweetners from "./pages/Sweetners.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <HomePage />,
    },
    {
      path: '/Atta', element: <Atta />,
    },
    {
      path: '/Ghee', element: <Ghee />,
    },
    {
      path: '/NewLaunch', element: <NewLaunch />,
    },
    {
      path: '/Oil', element: <Oil />,
    },
    {
      path: '/Sweetners', element: <Sweetners />,
    }
  ])
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
