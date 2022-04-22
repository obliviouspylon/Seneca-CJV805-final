import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCookies } from 'react-cookie';

const RegistrationForm = () => {
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [password, setPassword] = useState("")
    const [emailValid, setEmailvalid] = useState(true)
    const [require, setRequire] = useState(true)
    const [successful, setSuccessful] = useState(true)
    const [admin, setAdmin] = useState(true)
    const [adminMessage, setadminMessage] = useState(true)
    const [cookies, setCookie] = useCookies(['user']);

    const emailChange = (e) => setEmail(e.target.value);
    const fnameChange = (e) => setFname(e.target.value);
    const lnameChange = (e) => setLname(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const navigate = useNavigate();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function validateEmail(email) {
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return res.test(email);
    }

    function onClick() {
        setAdmin(true)
        if (!validateEmail(email)) {
            setEmailvalid(false)
            setRequire(true)
            setSuccessful(true)
        } else if (email === "" || fname === "" || lname === "" || password === "") {
            setEmailvalid(true)
            setRequire(false)
            setSuccessful(true)
        } else {
            setEmailvalid(true)
            setRequire(true)

            let URL = `https://seneca-cjv805-api.herokuapp.com/user/register`
            let user = {
                "firstName": fname,
                "lastName": lname,
                "email": email,
                "password": password
            };

            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then((response) => {
                if (response.status == 200) {   // *** This can be just `if (response.ok) {`
                    console.log("Register Successful")
                }else {
                    throw response;
                    
                }
                return response.json();
            }).then(json => {
                setSuccessful(false)

                console.log("Redirecting to Login")
                sleep(1000).then(() => {
                    navigate(`/login`);
                })
            }).catch(err => {
                let message = ''
                err.json().then((data) => {
                    setAdmin(false)
                    setadminMessage(data.message)
                    console.log(data.message)
                }).catch((err) => {
                    throw err
                });
            }
            )
        }
    };

    useEffect(() => {
        //Check for login
        if (document.cookie.email) {
            navigate(`/dashboard`);
        }
    }, [])

    return (
        <div className="container">

            <h1>Create an Account</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={emailChange} />
                    <p style={{ fontSize: 10, color: "red" }} hidden={emailValid}>Please Enter valid Email!</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="John" value={fname} onChange={fnameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Smith" value={lname} onChange={lnameChange} />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
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
                        <Link className='AlreadyHaveAccount' to="/login"><p>Already have an account? Sign In!</p></Link>
                    </Col>
                </Row>
                <Row>
                    <p style={{ fontSize: 20, color: "red" }} hidden={require}>Please fill out all fields!</p>
                    <p style={{ fontSize: 20, color: "red" }} hidden={admin}>{adminMessage}</p>
                    <p style={{ fontSize: 20, color: "green" }} hidden={successful}>Account Created Successfully! Please Wait...</p>
                </Row>

            </Form>

        </div>


    )
}

export default RegistrationForm