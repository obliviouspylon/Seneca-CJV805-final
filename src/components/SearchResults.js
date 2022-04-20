import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap'
import SearchResultItem from './SearchResultItem';

const SearchResults = ({listings,sorting,filter,updateListings}) => {
    const [sortedListings, setSortedListings] = useState(listings);

    useEffect(() => {
      updateListings();
      setSortedListings(listings);
    }, [])

    console.log(sortedListings)

    return (
      <Container>
          {sortedListings.map(listing => (<SearchResultItem id={listing.id} image={listing.img} title={listing.title} price={listing.price} type={listing.type} location={listing.location} bestseller={listing.bestseller}/>))}
      </Container>
    )
}


export default SearchResults