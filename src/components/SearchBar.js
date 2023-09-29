import React from 'react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('Italy');
  const [searchLocation, setSearchLocation] = useState('restaurant');
  const [sortOption, setSortOption] = useState('Best Match');

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
    // const options = {method: 'GET', headers: {accept: 'application/json'}};
    // fetch(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&sort_by=${sortOption}&limit=20`, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    console.log(`Searching for ${searchTerm}`);
    console.log(`Searching for ${searchLocation}`);
    console.log(`Sort option: ${sortOption}`);
  }

  return (
    <div>
      <input type='text' placeholder='Keyword' value={searchTerm} onChange={handleTermChange} />
      <input type='text' placeholder='Location' value={searchTerm} onChange={handleLocationChange} />
      
      <select value={sortOption} onChange={handleSortChange}>
        <option value="Best Match">Best Match</option>
        <option value="Highest Rated">Highest Rated</option>
        <option value="Most Reviewed">Most Reviewed</option>
      </select>
      
      <button onClick={handleSearch}>Go!</button>
    </div>
  )
}