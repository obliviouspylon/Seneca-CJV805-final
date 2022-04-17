import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from "../components/LoginForm";
import { Container } from 'react-bootstrap';


const LoginPage = () => {
  return (
    <div className='loginBG'>
      <main>
      <Header />
        <Container className='floating_box'>
          <LoginForm />
        </Container>
        <Footer />
      </main>
    </div>
  )
}

export default LoginPage