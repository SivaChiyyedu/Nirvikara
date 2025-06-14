

import '../App.css';
import Filters from '../components/Filters.jsx';
import Header from '../components/Header.jsx';
import Products from '../components/Products.jsx';
import Sort from '../components/Sort.jsx';


function Home() {
 
  return (
    <div className="main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {/* <header>
        <div>
          
            <Header />
            
          
        </div>
      </header> */}
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

export default Home;

