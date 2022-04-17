import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyDisplayItem = ({ title, image }) => {
    return (
        <Card className='listingCard' style={{width:"30rem"}}>
          <Link className='blackLink' to={`/property?type=${title}`}>
            <Card.Img className='cardImage' variant="top" src={image} style={{height:"90%", padding: "5px"}}/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
            </Link>
        </Card>
    
    );
  };

export default PropertyDisplayItem;
