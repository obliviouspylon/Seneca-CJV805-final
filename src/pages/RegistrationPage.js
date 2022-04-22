import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from "../components/RegistrationForm";
import { useCookies } from 'react-cookie';

import { Container } from 'react-bootstrap';

const RegistrationPage = () => {

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    //Check for login
    if (cookies.email) {
        navigate(`/dashboard`);
    }
}, [])

  return (
    <div className='loginBG'>
      <main>
      <Header />
        <Container className='floating_box'>
          <RegistrationForm />
        </Container>
        <Footer />
      </main>
    </div>

  )
}

export default RegistrationPage