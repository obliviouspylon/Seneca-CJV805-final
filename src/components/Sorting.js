import React, { useState, useEffect } from 'react';
import { Row, Col,Dropdown} from 'react-bootstrap';

const Sorting = ({ sorting, passSetSorting }) => {

    return (
        <Row>
            <Col><h3>Sort By</h3></Col>
            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Best Seller
                </Dropdown.Toggle>
            </Dropdown>
            </Col>
            <Col><Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Increasing</Dropdown.Item>
                    <Dropdown.Item href="#">Decreasing</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></Col>
            <Col><Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Distance
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Less Than 10km</Dropdown.Item>
                    <Dropdown.Item href="#">Less Than 25km</Dropdown.Item>
                    <Dropdown.Item href="#">Less Than 50km</Dropdown.Item>
                    <Dropdown.Item href="#">Less Than 100km</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></Col>
        </Row>
    )
}


export default Sorting