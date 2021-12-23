import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";

function Heatmap() {
  const options = []
  
  for(let i = 2008; i <= 2030; i++){
    options.push({name: i, value: i})
  }

  return (
    <div>
      <Container className="map-container">
        <h1>HEATMAP</h1>
        <Row xs={1}>
          <Col>
            <SelectSearch
              options={options}
              placeholder="Choose your year"
              search
              filterOptions={fuzzySearch}
            />
          </Col>
        </Row>
        <div className="map-placeholder"></div>
      </Container>
    </div>
  );
}

export default Heatmap;
