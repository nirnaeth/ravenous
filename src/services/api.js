export const searchBusinesses = (searchTerm, searchLocation, sortOption) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const options = {
    method: 'GET', 
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: 'application/json'
    }
  };

  return fetch(`/businesses/search?term=${searchTerm}&location=${searchLocation}&sort_by=${sortOption}&limit=20`, options)
    .then(response => response.json())
    .catch(err => {console.error(err)});
}