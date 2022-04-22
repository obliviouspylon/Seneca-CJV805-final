import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCookies } from 'react-cookie';

const DashBoardForm = () => {

    const [cookies, setCookie] = useCookies(['user']);
    const [email, setEmail] = useState(cookies.email)
    const [fname, setFname] = useState(cookies.firstName)
    const [lname, setLname] = useState(cookies.lastName)
    const navigate = useNavigate();


    useEffect(() => {
        //Check for login
        if (!cookies.email) {
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