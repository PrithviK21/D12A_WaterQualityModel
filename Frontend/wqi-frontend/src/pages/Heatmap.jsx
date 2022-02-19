import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

function Heatmap() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [year, setYear] = useState("2008");
  const options = [];

  for (let i = 2008; i <= 2030; i++) {
    options.push({ name: i, value: i });
  }

  const handleChange = (val) => {
    console.log(val);
    setYear(val);
  };

  useEffect(() => {
    const endpoint = "http://127.0.0.1:8000/heatmapapi/?year=" + year;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setHeatmapData(data);
        // console.log(heatmapData.z, heatmapData.locations);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [year]);

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
              onChange={handleChange}
              value={year}
            />
          </Col>
        </Row>
        {/* <div className="map-placeholder"></div> */}
        <Plot
          data={[
            {
              type: "choropleth",
              locationmode: "geojson-id",
              geojson: heatmapData.geojson,
              locations: heatmapData.locations,
              z: heatmapData.z,
              text: heatmapData.text,
              hoverinfo: "text + z",
              autocolorscale: true,

              zmax: 100,
              zmin: 0,
            },
          ]}
          layout={{
            title: `WQI by State for ${year}`,
            geo: {
              fitbounds: "locations",
              visible: false,
            },
          }}
        />
      </Container>
    </div>
  );
}

export default Heatmap;
