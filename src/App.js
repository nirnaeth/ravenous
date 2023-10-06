import React, { useState } from 'react';
import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={handleSearchResults}/>
        <BusinessList searchResults={searchResults}/>
      </header>
    </div>
  );
}

export default App;
