import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
    const [email,setEmail] = useState("")
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [password,setPassword] = useState("")
    const [emailValid, setEmailvalid] = useState(true)
    const [require,setRequire] = useState(true)
    const [successful,setSuccessful] = useState(true)

    const emailChange = (e) => setEmail(e.target.value);
    const fnameChange = (e) => setFname(e.target.value);
    const lnameChange = (e) => setLname(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    function validateEmail(email) {
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return res.test(email);
    }

    function onClick() {
        if (!validateEmail(email)) {
            setEmailvalid(false)
            setRequire(true)
            setSuccessful(true)
        } else if (email==="" || fname==="" || lname==="" || password===""){
            setEmailvalid(true)
            setRequire(false)
            setSuccessful(true)
        } else {
            setEmailvalid(true)
            setRequire(true)
            setSuccessful(false)
        }
    };

    return (
        <div className="container">

            <h1>Create an Account</h1>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={emailChange}/>
                    <p style={{ fontSize: 10, color: "red" }} hidden={emailValid}>Please Enter valid Email!</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="John" value={fname} onChange={fnameChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Smith" value={lname} onChange={lnameChange}/>
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={passwordChange}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Button className='submitButton' variant="primary"  onClick={onClick}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Link className='AlreadyHaveAccount' to="/login"><p>Already have an account? Sign In!</p></Link>
                    </Col>
                </Row>
                <Row>
                    <p style={{ fontSize: 20,color: "red" }} hidden={require}>Please fill out all fields!</p>
                    <p style={{ fontSize: 20,color: "green" }} hidden={successful}>Account Created Successfully!</p>
                </Row>

            </Form>

        </div>


    )
}

export default RegistrationForm