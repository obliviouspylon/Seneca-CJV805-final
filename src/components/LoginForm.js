import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailValid, setEmailvalid] = useState(true)
    const [require, setRequire] = useState(true)
    const [successful, setSuccessful] = useState(true)

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const navigate = useNavigate();

    function validateEmail(email) {
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return res.test(email);
    }

    function onClick() {
        if (!validateEmail(email)) {
            setEmailvalid(false)
            setRequire(true)
            setSuccessful(true)
        } else if (email === "" || password === ""){
            setEmailvalid(true)
            setRequire(false)
            setSuccessful(true)
        } else {
            setEmailvalid(true)
            setRequire(true)

            let URL = `https://seneca-cjv805-api.herokuapp.com/login`
            let user = {
                "email": email,
                "password": password
            };

            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }) // GET
                .then(response => response.json())
                .then(json => {
                    setSuccessful(false)
                    document.cookie = {
                        "firstName": json.body.fname,
                        "lastName": json.body.lname,
                        "email":json.body.email
                    }
                    console.log(document.cookie)
                    navigate(`/dashboard`);
                })
                .catch(err => {
                    console.log(err)}
                )
            document.cookie = {

            }
        }
    };

    return (

        <section id="login-section">

            <h1>Log In</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={emailChange} />
                    <p style={{ fontSize: 10, color: "red" }} hidden={emailValid}>Please Enter valid Email!</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={passwordChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Button className='submitButton' variant="primary" onClick={onClick}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Link className='AlreadyHaveAccount' to="/registration"><p>Need an account? Register!</p></Link>
                    </Col>
                </Row>
                <Row>
                    <p style={{ fontSize: 20, color: "red" }} hidden={require}>Please fill out all fields!</p>
                    <p style={{ fontSize: 20, color: "green" }} hidden={successful}>Login Successfully!</p>
                </Row>
            </Form>
        </section>
    )
}

export default LoginForm