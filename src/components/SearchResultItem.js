import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, ListGroup, Button, Image, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchResultItem = ({ id, image, title, price, type, location, bestseller }) => {

    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col xs={12} md={true}>
                        <Image src={image} rounded fluid={true} />
                    </Col>
                    <Col xs={8} md={6}>
                        <Row><h3>{title}</h3></Row>
                        <Row><p>{location}</p></Row>
                        <Row><h4>{type}</h4></Row>
                        {bestseller ? <Badge bg="info" pill={false}><h5><b>BestSeller</b></h5></Badge> : null}
                    </Col>
                    <Col xs={4} md={true}>
                        <Row>
                            <Col xs={12} md={12} ><h2 className='text-center'>${price} CAD</h2></Col>
                            <Col xs={6} md={12} className="mx-auto"><Link to={`/listings/${id}`}><Button className='listingButton' variant="primary">View</Button></Link></Col>
                            <Col xs={6} md={12} className="mx-auto"><Link className='centered' to={`/listings/${id}`}><Button className='listingButton centered' variant="success">Book</Button></Link></Col>
                        </Row>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SearchResultItem;
