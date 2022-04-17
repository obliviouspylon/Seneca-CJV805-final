import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListingItem = ({ id, title, image, price, check }) => {
  if (check) {
    return (
      <Card className='listingCard' style={{ width: "30rem" }} key={id}>
        <Link className='blackLink' to={`/listings/${id}`}>
          <Card.Img className='cardImage' variant="top" src={image} style={{ height: "90%", padding: "5px" }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price} per night</Card.Text>
          </Card.Body>
        </Link>
      </Card>

    );
  } else {
    return null;
  }
};

export default ListingItem;
