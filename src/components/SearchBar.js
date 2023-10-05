import React from 'react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('restaurant');
  const [searchLocation, setSearchLocation] = useState('Italy');
  const [sortOption, setSortOption] = useState('best_match');

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
    const apiKey = 's4OxW08HwYxBVKSKBVUdZ6uA3QH8d5gMkwNc0Lwy81DwcGKf2cS-tE7tJZYlUgluxXhVHEQrWpRZvJeAN0CruKzrucETHVgCyx6x9vXgdcB-WPYCqLBJLiHXy3keZXYx'
    const options = {
      method: 'GET', 
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json'
      }
    };

    fetch(`/businesses/search?term=${searchTerm}&location=${searchLocation}&sort_by=${sortOption}&limit=20`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    console.log(`Searching for ${searchTerm}`);
    console.log(`Searching for ${searchLocation}`);
    console.log(`Sort option: ${sortOption}`);
  }

  return (
    <div>
      <input type='text' placeholder='Keyword' value={searchTerm} onChange={handleTermChange} />
      <input type='text' placeholder='Location' value={searchLocation} onChange={handleLocationChange} />
      
      <select value={sortOption} onChange={handleSortChange}>
        <option value="best_match">Best Match</option>
        <option value="highest_rated">Highest Rated</option>
        <option value="most_reviewed">Most Reviewed</option>
      </select>
      
      <button onClick={handleSearch}>Go!</button>
    </div>
  )
}