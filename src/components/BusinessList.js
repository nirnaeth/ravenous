import React from 'react';
import Business from './Business'

const businesses = [
  {
    image: 'image_1',
    name: 'name 1',
    address: 'address 1',
    city: 'city 1',
    state: 'state 1',
    zipcode: 'zipcode 1',
    category: 'category 1',
    rating: 'rating 1',
    reviewCount: 1
  },
  {
    image: 'image_2',
    name: 'name 2',
    address: 'address 2',
    city: 'city 2',
    state: 'state 2',
    zipcode: 'zipcode 2',
    category: 'category 2',
    rating: 'rating 2',
    reviewCount: 2
  },
  {
    image: 'image_3',
    name: 'name 3',
    address: 'address 3',
    city: 'city 3',
    state: 'state 3',
    zipcode: 'zipcode 3',
    category: 'category 3',
    rating: 'rating 3',
    reviewCount: 3
  },
]

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

