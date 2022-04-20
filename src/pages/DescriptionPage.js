import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge, Stack, Accordion, ListGroup } from 'react-bootstrap';


const ammenities_dict = {
    "pool": "Pool",
    "breakfast": "Breakfast Included",
    "wifi": "WiFi included",
    "parking": "Parking",
    "airportTransfer": "Airport Transfers"
}

const ListingDescriptionPage = () => {


    const [listing, setListing] = useState({
        "id": 0,
        "title": "",
        "img": "",
        "description": "",
        "price": 0,
        "type": "",
        "location": "",
        "bestseller": false,
        "amenities": {
            "pool": false,
            "breakfast": false,
            "wifi": false,
            "parking": false,
            "airportTransfer": false
        },
        "houseRules": []
    })

    const { id } = useParams()
    useEffect(() => {
        // const URL = `http://localhost:5000/listings/${id}`
        let URL = `https://seneca-cjv805-api.herokuapp.com/listings/${id}`
        //MAKE AN AJAX request

        fetch(URL) // GET
            .then(response => response.json())

            .then(json => {
                setListing(json)
            })
            .catch(err => console.log(err))
    }, [])
    var HouseRules = listing["houseRules"]
    var keyNames = Object.keys(listing.amenities)
    var Amenities = [];
    for (let key in keyNames) {
        if (listing.amenities[keyNames[key]]) {
            Amenities.push(ammenities_dict[keyNames[key]])
        }
    }
    if (Amenities.length === 0) {
        Amenities = ["No Amenities Found. Please message Host for more details."]
    }

    return (
        <div className="">
            <Header />
            <main>
                <Container bsPrefix={""}>
                    <Row>
                        <Col xs={12} md={9}>
                            <Col xs={12}>
                                {listing.bestseller ? <Badge bg="info" pill={false}><h3><b>BestSeller</b></h3></Badge> : null}
                            </Col>
                            <Col xs={12}><h1>{listing.title}</h1></Col>
                            <Col xs={12}><p>{listing.description}</p></Col>
                        </Col>
                        <Col xs={12} md={3}>
                            <Row xs={12} md={3}>
                                <Col xs={8} sm={8} md={12}><h1>${listing.price} CAD</h1><h4>/Night</h4></Col>
                                <Col bsPrefix={"pt-3 col-md-12 col-sm-4 col-4"}><Link className='' to={`/listings/${id}`}><Button variant="success" size="lg">Book</Button></Link></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row bsPrefix={"pt-4 pb-4"}>
                        <Col sm={12} md={9} bsPrefix={"pb-5 col-xs-12 col-sm-8 col-md-8 col-lg-8"}>
                            <Image src={listing.img} rounded fluid={true} />
                        </Col>
                        <Col sm={12} md={4}>
                            <Row>
                                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9260799569643!2d-79.35193538427976!3d43.79514687911673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d31babbf5ce7%3A0x5812aa25d9fb9912!2sSeneca%20College%20Newnham%20Campus!5e0!3m2!1sen!2sca!4v1650441426841!5m2!1sen!2sca" frameBorder="0" scrolling="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Row>
                            <Row bsPrefix={"pt-2"}>
                                <h3>{listing.location}</h3>
                            </Row>
                            <Row bsPrefix={"pt-3"}>
                                <h4>Property Type: {listing.type}</h4>
                            </Row>
                            <Row bsPrefix={"pt-3"}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Amenities</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {Amenities.map(Amenity =>
                                                    <ListGroup.Item>{Amenity}</ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Row>
                        </Col>
                    </Row>
                    <Row bsPrefix={"pb-5 col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>House Rules</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        {HouseRules.map(Rule => (
                                            <ListGroup.Item>{Rule}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </Container>
            </main >
            <Footer />

        </div >
    )
}

export default ListingDescriptionPage