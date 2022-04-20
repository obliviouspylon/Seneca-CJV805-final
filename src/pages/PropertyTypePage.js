import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import SearchFilter from '../components/SearchFilter';
import Sorting from '../components/Sorting';
import SearchResults from '../components/SearchResults';
import PropertyDisplayList from '../components/PropertyDisplayList';


const PropertyTypePage = ({ listings, updateListings }) => {
    const [listingLoaded, setLoaded] = useState(false);
    const [propertyType, setPropertyType] = useState("Hotels");
    const [searchParams] = useSearchParams()
    let pageTitle = searchParams.get('type')

    if(pageTitle === null){
        pageTitle = "Hotels"
    }

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

    useEffect(()=>{
        // let URL = `http://localhost:5000/listings?type=${pageTitle}`
        let URL = `https://seneca-cjv805-api.herokuapp.com/listings/listings?type=${pageTitle}`
        //MAKE AN AJAX request
    
            // console.log("propertyType=" + pageTitle)

        fetch(URL) // GET
        .then(response=>response.json())
    
        .then(json=>{
            updateListings(json)
            console.log(listings)
            setLoaded(true)
        })
        .catch(err=>console.log(err))
    
     },[])

    return (
        <div className="grid grid-row-3" id="main-container">
            <Header />
            <main>
                <Container>
                    <PropertyDisplayList setPropertyType={setPropertyType}/>
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
                            <div className='row listingSort'>
                                <h1>{pageTitle}</h1>
                                <Sorting sorting={sorting} passSetSorting={setSorting} />
                            </div>
                            <Row>
                                {(listingLoaded)?
                                    <SearchResults listings={listings} sorting={sorting} filter={filter} updateListings={updateListings} />: "Loading..."
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />

        </div>
    )
}

export default PropertyTypePage