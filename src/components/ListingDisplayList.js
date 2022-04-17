import React, { useState, useEffect } from 'react';
import {Container,CardGroup} from 'react-bootstrap';
import ListingDisplayItem from "./ListingDisplayItem";

const ListingDisplayList = ({listings}) => {

  return (
    <section style={{margin:"10px"}}>
      <h1>Bestsellers</h1>
      <Container className='row flex-nowrap overflow-auto' style={{height:"35rem"}}>
          {listings.map(listing => (<ListingDisplayItem id={listing.id} title={listing.title} image={listing.img} price={listing.price} check={listing.bestseller}/>))}
      </Container>
    </section>
  );
};

export default ListingDisplayList;
