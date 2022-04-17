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
                <iframe title='Map' width="100%" src="https://maps.google.com/maps?q=Seneca%20college%20newham&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
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