import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
function LineChart() {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "Eng1lish", value: "ean" },
    { name: "Eng2lish", value: "en" },
    { name: "En5glish", value: "aen" },
    { name: "Eng4lish", value: "den" },
    { name: "English", value: "efn" },
  ];

  return (
    <div>
      <Container className="map-container">
        <Row xs={1}>
          <Col>
            <SelectSearch
              options={options}
              placeholder="Choose your river"
              search
              filterOptions={fuzzySearch}
            />
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col lg={8}>
            <div className="graph-placeholder"></div>
          </Col>
          <Col lg={4}>
            <div className="info-container"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LineChart;
