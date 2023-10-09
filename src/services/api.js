export const searchBusinesses = (searchTerm, searchLocation, sortOption) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const options = {
    method: 'GET', 
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: 'application/json'
    }
  };

  const termParam = searchTerm ? `term=${searchTerm}` : '';
  const locationParam = searchLocation ? `location=${searchLocation}` : '';
  const sortParam = sortOption ? `sort_by=${sortOption}` : '';

  // TODO: enhance limits
  return fetch(`/businesses/search?${termParam}&${locationParam}&${sortParam}&limit=20`, options)
    .then(response => response.json())
    .catch(err => {console.error(err)});
}