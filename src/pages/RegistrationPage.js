import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from "../components/RegistrationForm";

import { Container } from 'react-bootstrap';

const RegistrationPage = () => {
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