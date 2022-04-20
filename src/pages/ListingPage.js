import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import SearchFilter from '../components/SearchFilter';
import Sorting from '../components/Sorting';
import SearchResults from '../components/SearchResults';


const ListingPage = ({ listings, updateListings }) => {
  const [filter, setFilter] = useState({
    name: "",
    checkboxes: {
      "Pool": false,
      "Breakfast Included": false,
      "WiFi included": false,
      "Parking": true,
      "Airport Transfers": false
    }
  });
  const [sorting, setSorting] = useState({
    name: "",
    checkboxes: {
      "Pool": false,
      "Breakfast Included": false,
      "WiFi included": false,
      "Parking": true,
      "Airport Transfers": false
    }
  });

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <Row><div>
              <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9260799569643!2d-79.35193538427976!3d43.79514687911673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d31babbf5ce7%3A0x5812aa25d9fb9912!2sSeneca%20College%20Newnham%20Campus!5e0!3m2!1sen!2sca!4v1650441426841!5m2!1sen!2sca" frameBorder="0" scrolling="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </Row>
              <Row><h2>Filter Options</h2>
                <SearchFilter filter={filter} passSetFilter={setFilter} />
              </Row>
            </Col>
            <Col sm={12} md={9}>
              {/* <Row> */}
              <div className='row listingSort'>
                <h1>Listings</h1>
                <Sorting sorting={sorting} passSetSorting={setSorting} />
              </div>
              {/* </Row> */}
              <Row>
                <SearchResults listings={listings} sorting={sorting} filter={filter} updateListings={updateListings} />
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />

    </div>
  )
}

export default ListingPage