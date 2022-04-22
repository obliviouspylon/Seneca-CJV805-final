import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from "../components/LoginForm";
import { Container } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


const LoginPage = () => {
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
          <LoginForm />
        </Container>
        <Footer />
      </main>
    </div>
  )
}

export default LoginPage