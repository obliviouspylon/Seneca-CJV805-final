import React, {useRef, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeroItem({ image, title, caption }){
  return (
      <Carousel.Item key={image}>
          <img
              className="d-block w-100"
              src={image}
              alt={title}
          />
          <Carousel.Caption>
              <h3>{title}</h3>
              <p>{caption}</p>
          </Carousel.Caption>
      </Carousel.Item>
  );
};

const Hero = () => {
  //creating my state
  const [slides, setSlides] = useState([{
    image: "",
    title: "",
    caption: "",
  }]);


  useEffect(() => {
    // const URL = 'http://localhost:5000/heroSlides'
    let URL = 'https://json-server-seneca.herokuapp.com/heroSlides'
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
      setSlides(json)
    })
    .catch(err=>console.log(err))
  }, [])

  return (
    <Container id="hero-section overflow-auto">
      <Carousel style={{height:'25%'}}>
        {slides.map(slide => HeroItem(slide))}
      </Carousel>
    </Container>
  );
};

export default Hero;
