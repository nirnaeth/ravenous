import React, { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image, Heading } from '@chakra-ui/react'

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
        <header>
          <Box position="relative">
            <Image 
              src='header.jpg' 
              alt="Header Image" 
              w="100%" 
              maxH="400px" 
              objectFit="cover" 
              objectPosition="bottom" 
              bg='black'
            />
            <Heading 
              size='4xl' 
              position="absolute"
              top={5}
              left={5}
              color='white'
              zIndex={1}
            >
              Ravenous!
            </Heading>
          </Box>
          
          <SearchBar onSearch={handleSearchResults}/>
        </header>
        <BusinessList searchResults={searchResults}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
