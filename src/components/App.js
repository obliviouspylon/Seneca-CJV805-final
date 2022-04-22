import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from "react-cookie";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from '../pages/HomePage';
import AboutPage from "../pages/AboutPage"
import ListingPage from "../pages/ListingPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import DescriptionPage from "../pages/DescriptionPage";
import PropertyTypePage from "../pages/PropertyTypePage";
import SearchPage from "../pages/SearchPage";
import DashBoardPage from '../pages/DashBoardPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';


const App = () => {
  //creating my state
  const [listings, setListings] = useState([{
    "id": 0,
    "title": "",
    "img": "",
    "description": "",
    "price": 0,
    "type": "",
    "location": "",
    "bestseller": false,
    "Amenities": {
      "Pool": false,
      "Breakfast Included": false,
      "WiFi included": false,
      "Parking": false,
      "Airport Transfers": false
    },
    "House Rules": []
  }]);

  function updateListings(json = null) {
    if (json === null) {
      // let URL = 'http://localhost:5000/listings'
      let URL = 'https://seneca-cjv805-api.herokuapp.com/listings/all'

      //MAKE AN AJAX request
      fetch(URL, { mode: 'cors' })
        .then(response => response.json())
        .then(json => {
          setListings(json)
        })
        .catch(err => console.log(err))
    } else {
      setListings(json)
    }
  }

  useEffect(() => {
    updateListings()
  }, [])

  return (
    <BrowserRouter>
      <CookiesProvider>

        <Routes>
          <Route path="/" element={<HomePage listings={listings} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="listings" element={<ListingPage listings={listings} updateListings={updateListings} />} />
          <Route path="property" element={<PropertyTypePage listings={listings} updateListings={updateListings} />} />
          <Route path="search" element={<SearchPage listings={listings} updateListings={updateListings} />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="listings/:id" element={<DescriptionPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default App;

