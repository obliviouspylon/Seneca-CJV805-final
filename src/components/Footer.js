import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {
  BsFacebook, BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsYoutube, BsFillGeoAltFill, BsAt
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-left'>
          <Col className='col-3'>
            <Row><b>Rest Inn</b></Row>
            <Row>At Rest Inn, we are committed to helping our customers find their dream vacation.</Row>
          </Col>
          <Col className='col-3'>
            <Row><b>Support</b></Row>
            <Row><Link className='blackLink' to="/privacy">Privacy Policy</Link></Row>
            <Row><Link  className='blackLink' to="/termsandconditions">Terms and Conditions</Link></Row>

          </Col>
          <Col className='col-3'>
            <Row><b>Contact Us</b></Row>
            <Row><Col className='col-1'><BsFillGeoAltFill /></Col><Col>1760 Finch Avenue East Toronto, ON, M2J 5G3</Col></Row>
            <Row><Col className='col-1'><BsFillTelephoneFill /></Col><Col>125-458-5515</Col></Row>
            <Row><Col className='col-1'><BsAt /></Col><Col>service@restinn.ca</Col></Row>
          </Col>
          <Col className='col-3'>
            <Row><b>Connect with Us</b></Row>
            <Row><Col className='col-1 offset-md-1'><BsFacebook /></Col><Col>Rest Inn</Col></Row>
            <Row><Col className='col-1 offset-md-1'><BsInstagram /></Col><Col>Rest Inn</Col></Row>
            <Row><Col className='col-1 offset-md-1'><BsWhatsapp /></Col><Col>Rest Inn</Col></Row>
            <Row><Col className='col-1 offset-md-1'><BsYoutube /></Col><Col>Rest Inn</Col></Row>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col className='col-12'>©Rest Inn 2022</Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;
