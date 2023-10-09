import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <SearchBar onSearch={handleSearchResults}/>
        </header>
        <BusinessList searchResults={searchResults}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
