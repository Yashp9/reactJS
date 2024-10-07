const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
      <button className="search-button" onClick={()=>{console.log("click");}}>top-dish</button>
    </div>
  );
};

export default SearchBar;