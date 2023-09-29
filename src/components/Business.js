import React from 'react';

export default function Business(props) {
  return( 
    <li key={props.index}>
      <img src={props.info.img} alt={props.info.name}/>
      <p>{props.info.name}</p>
      <p>{props.info.address}</p>
      <p>{props.info.category}</p>
      <p>{props.info.rating}</p>
      <p>{props.info.reviewCount}</p>
    </li>
  )
}