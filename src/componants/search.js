import { useState } from "react";

const SearchBar = () => {
  const [searchedList,setsearchedList] = useState([])
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;