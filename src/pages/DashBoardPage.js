import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import DashBoardForm from "../components/DashboardForm";

import { Container } from 'react-bootstrap';

const DashBoardPage = () => {
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