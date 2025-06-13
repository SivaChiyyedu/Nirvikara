// import { useState } from "react";
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./components/products.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import Sort from "./components/Sort.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  // ]);
  return (
    <div className="main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <header>
        <div>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path={"/"} element={<Header />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/service"} element={<Service />} />
              <Route path={"/gallery"} element={<Gallery />} />
              <Route path={"/blog"} element={<Blog />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
      <main>
        <div className="main-header-div">
          <Filters />
          <Sort />
        </div>
        <Products />
      </main>
    </div>
  );
}

export default App;
