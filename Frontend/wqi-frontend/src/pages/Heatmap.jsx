import React from "react";
import { Container } from "react-bootstrap";
function Heatmap() {
  return (
    <div>
      <Container className="map-container">
        <h1>HEATMAP</h1>
        <input type="number" />
        <div className="map-placeholder"></div>
      </Container>
    </div>
  );
}

export default Heatmap;
