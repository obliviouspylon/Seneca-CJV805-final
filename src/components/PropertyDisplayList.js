import React, { useState, useEffect } from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import PropertyDisplayItem from "./PropertyDisplayItem";

const ListingList = () => {

    //creating my state
    const [types, setTypes] = useState([{
        title: "",
        image: null
    }]);


    useEffect(() => {
        // const URL = 'http://localhost:5000/property'
        let URL = 'https://json-server-seneca.herokuapp.com/property'
        //MAKE AN AJAX request

        fetch(URL)
          .then(response => response.json())

          .then(json => {
            setTypes(json)
          })
          .catch(err => console.log(err))
    }, [])

    return (
        <section style={{ margin: "10px" }}>
            <h1>Properties</h1>
            <Container className='row flex-nowrap overflow-auto' style={{ height: '28rem' }}>
                {types.map(type => (<PropertyDisplayItem title={type.title} image={type.image} />))}
            </Container>
        </section>
    );
};

export default ListingList;
