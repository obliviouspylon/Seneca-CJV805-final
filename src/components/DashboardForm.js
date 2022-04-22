import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const DashBoardForm = () => {

    const cookies = new Cookies(req.headers.cookie);
    const [email, setEmail] = useState(cookies.get('email'))
    const [fname, setFname] = useState(cookies.get('firstName'))
    const [lname, setLname] = useState(cookies.get('lastName'))
    const navigate = useNavigate();

    useEffect(() => {
        //Check for login
        if (cookies.get('email') === undefined) {
            navigate(`/login`);
        }
    }, [])

    return (
        <div className="container">

            <h1>User Dashboard</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" value={email} disabled="true" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={fname} disabled="true" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lname} disabled="true" />
                </Form.Group>
            </Form>

        </div>


    )
}

export default DashBoardForm