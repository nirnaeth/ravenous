import React from 'react';
import { useState } from 'react';
import { searchBusinesses } from '../services/api';


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
    searchBusinesses(searchTerm, searchLocation, sortOption)
      .then(response => console.log(response));
  };

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