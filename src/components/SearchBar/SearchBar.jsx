import { FaSearch } from "react-icons/fa";
import './SearchBar.css'
function SearchBar() {
  return (
    <div className="searchBar">
      
        
        <input
          type="text"
          name="Search"
          id="Search"
          className="searchInput"
          placeholder="Search for products"
        />
      
      <button className="searchButton">
<FaSearch />
      </button>
        
      
    </div>
  );
}

export default SearchBar;
