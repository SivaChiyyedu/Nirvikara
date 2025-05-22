// import { useState } from "react";
import Products from "./components/products.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import Sort from "./components/Sort.jsx";

function HomePage() {
  return (
    <div className="main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <header>
        <div>
          <Header />
        </div>
      </header>
      <main>
        <header>
          <div className="main-header-div">
            <Filters />
            <Sort />
          </div>
        </header>
        <Products />
      </main>
    </div>
  );
}

export default HomePage;
