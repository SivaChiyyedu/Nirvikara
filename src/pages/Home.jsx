import "../App.css";
import Categories from "../components/Categories/Categories.jsx";
import Filters from "../components/Filters.jsx";
import Products from "../components/Products.jsx";
import Sort from "../components/Sort.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <main>
        <Categories/>
        <div className="main-header-div">
          <Filters />
          <Sort />
        </div>
        <Products />
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
