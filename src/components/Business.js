import React from 'react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Image, Text, VStack, HStack, Link } from '@chakra-ui/react'
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons'

export default function Business(props) {
  const rating = Math.round(props.info.rating);
  const address = `${props.info.location.display_address[0]} - ${props.info.location.display_address[1]}`;
  const categories = props.info.categories.map(category => category.title).join(', ');

  return(     
      <li key={props.index}>
        <Card direction="row" variant='outline'>
          <CardHeader minWidth='20%' maxWidth='20%'>
            <Heading size='md' isTruncated>{props.info.name}</Heading>
          </CardHeader>
          
          <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={props.info.image_url}
              alt={props.info.name}
            />

          <CardBody>
            <Text as='i' fontSize='sm' color='tomato'>{categories}</Text>
            <Text>{address}</Text>
            <Text>{props.info.display_phone}</Text>
          </CardBody>
          
          <CardFooter minWidth='15%' maxWidth='15%'>
            <VStack align='left'>
              <HStack>
                <Text>Rating: {[...Array(rating)].map( (_, i) => <StarIcon key={i} color='tomato'/>)}</Text>
              </HStack>
              <Text>Reviews: 
                <Link href={props.info.url} isExternal>
                  {props.info.review_count} <ExternalLinkIcon mx='2px' />
                </Link>
              </Text>
            </VStack>
          </CardFooter>
        </Card>
      </li>
  )
}