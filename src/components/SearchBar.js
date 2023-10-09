import React from 'react';
import { useState } from 'react';
import { searchBusinesses } from '../services/api';

import { Center, HStack, Spacer } from '@chakra-ui/react'
import { Input, Select, Button } from '@chakra-ui/react'


export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = () => {
    searchBusinesses(searchTerm, searchLocation, sortOption)
      .then(response => {
        props.onSearch(response);
      });
  };

  return (
    <Center bg='tomato' w='100%' p={4} color='white'>
      <HStack>
        <Input bg='white' size='sm' color='blueviolet' fontSize='md' fontWeight='semibold' placeholder='Keyword' value={searchTerm} onChange={handleTermChange} />
        <Input bg='white' size='sm' color='blueviolet' fontSize='md' fontWeight='semibold' placeholder='Location' value={searchLocation} onChange={handleLocationChange} />
        <Select bg='white' size='sm' color='blueviolet' fontSize='md' fontWeight='semibold' placeholder='Sorted By' value={sortOption} onChange={handleSortChange}>
          <option value="best_match">Best Match</option>
          <option value="rating">Highest Rated</option>
          <option value="review_count">Most Reviewed</option>
        </Select>  
        
        <Spacer />

        <Button bg='blueViolet' color='white' size='md' onClick={handleSearch}>Go!</Button>
      </HStack>
    </Center>
  )
}