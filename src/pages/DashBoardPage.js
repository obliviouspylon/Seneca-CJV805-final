import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashBoardForm from "../components/DashboardForm";
import { useCookies } from 'react-cookie';

import { Container } from 'react-bootstrap';

const DashBoardPage = () => {

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    //Check for login
    if (!cookies.email) {
        navigate(`/login`);
    }
}, [])

  return (
    <div className='loginBG'>
      <main>
      <Header />
        <Container className='floating_box'>
          <DashBoardForm />
        </Container>
        <Footer />
      </main>
    </div>

  )
}

export default DashBoardPage