export const searchBusinesses = (searchTerm, searchLocation, sortOption) => {
  const apiKey = 's4OxW08HwYxBVKSKBVUdZ6uA3QH8d5gMkwNc0Lwy81DwcGKf2cS-tE7tJZYlUgluxXhVHEQrWpRZvJeAN0CruKzrucETHVgCyx6x9vXgdcB-WPYCqLBJLiHXy3keZXYx'
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