import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashBoardForm = () => {

    //Check for login
    if (!document.cookie.email){

    }

    const [email,setEmail] = useState(document.cookie.email)
    const [fname,setFname] = useState(document.cookie.firstName)
    const [lname,setLname] = useState(document.cookie.lastName)

    return (
        <div className="container">

            <h1>User Dashboard</h1>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} disabled="true"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="John" value={fname} disabled="true"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Smith" value={lname} disabled="true"/>
                </Form.Group>
            </Form>

        </div>


    )
}

export default DashBoardForm