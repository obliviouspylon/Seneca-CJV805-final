import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ListingDisplayList from "../components/ListingDisplayList";
import PropertyDisplay from "../components/PropertyDisplayList";
import Container from 'react-bootstrap/Container'

const HomePage = ({listings}) => {
  return (
    <div>
        <Header/>
        <main>
          <Container>
            <Hero/>
            <ListingDisplayList listings={listings}/>
            <PropertyDisplay />
          </Container>
        </main>
        <Footer/>

    </div>
  )
}

export default HomePage