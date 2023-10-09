import React from 'react';
import Business from './Business'

export default function BusinessList(props) {
  const businesses = props.searchResults?.businesses || [];
  
  return (
    <ul>
      {
        businesses.map( (business, index) => { return <Business info={business} key={index}/> })
      }
    </ul>
  )
}

