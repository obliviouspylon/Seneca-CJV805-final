import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Checkbox from './Checkbox';

const SearchFilter = ({ filter, passSetFilter }) => {
    var keyNames = Object.keys(filter.checkboxes)

    // const onClick = (keyName) => {
    //     let filterData = filter
    //     // console.log(filter.checkboxes)
    //     filterData.checkboxes[keyName] = !filterData.checkboxes[keyName]
    //     // console.log(filterData)
    //     // setChecked(!Checked)
    //     passSetFilter(filter.checkboxes)
    //  }

    return (
        <Container>
            <Row>
                {keyNames.map(keyName => (
                    <Col xs={4} sm={6} md={12}>
                            {/* <div className="" onChange={onClick(keyName)}>
                            <input type="checkbox" className="checkbox-input" id={keyName} checked={filter.checkboxes[keyName]} />
                            <label className="checkbox-label" htmlFor={keyName}>{keyName}</label>
                          </div> */}
                        <Checkbox keyName={keyName} filter={filter} passSetFilter={passSetFilter} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default SearchFilter;