import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import { SyncLoader } from "react-spinners";
import geojson from "../assets/states_india.json";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);
const options = [{ name: "--Select a year--", value: 0 }];

for (let i = 2008; i <= 2030; i++) {
  options.push({ name: i, value: i });
}
console.log(options[1]);
function Heatmap() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [year, setYear] = useState(0);
  console.log(geojson)

  const handleChange = (val) => {
    //console.log(val);
    setYear(val);
  };

  useEffect(() => {
    //console.log(year);
    setHeatmapData(null);
    if (year === 0) return;
    const start = Date.now();
    const endpoint = "http://127.0.0.1:8000/heatmapapi/?year=" + year;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        // console.log(data.geojson.features);
        // console.log(typeof(data.geojson) == typeof(geojson))
        // for(let i = 0; i < data.geojson.features.length; i++){
        //   console.log(data.geojson.features[i].id, geojson.features[i].id)
        // }
        setHeatmapData(data);
        const end = Date.now();
        //console.log(`Time for request: ${(end - start) / 1000}s`);
      })
      .catch((e) => {
        //console.log(e);
      });
  }, [year]);

  useEffect(() => {
    console.log(geojson.features)
    for(let i = 0; i < geojson.features.length; i++){
      geojson.features[i].id = geojson.features[i].properties.state_code
    }
    console.log(geojson)
  }, [])

  return (
    <div>
      <Container className="map-container">
        <h2 className="page-header">Heatmap</h2>
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
        {heatmapData ? (
          <Plot
            data={[
              {
                type: "choropleth",
                locationmode: "geojson-id",
                // geojson: heatmapData.geojson,
                geojson: geojson,
                locations: heatmapData.locations,
                z: heatmapData.z,
                text: heatmapData.text,
                hoverinfo: "text + z",
                colorscale: [
                  [0, "darkred"],
                  [0.2, "red"],
                  [0.4, "orange"],
                  [0.6, "yellow"],
                  [0.8, "lightgreen"],
                  [1, "cyan"],
                ],
                zmax: 100,
                zmin: 0,
                colorbar: {
                  len: 0.8,
                },
              },
            ]}
            layout={{
              title: `WQI by State for ${year}`,
              height: window.innerHeight * 0.8,
              geo: {
                fitbounds: "locations",
                visible: false,
              },
              margin: {
                b: 0,
              },
            }}
            useResizeHandler
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Container className="heatmap-loader">
            {year === 0 ? (
              <h2>
                No year selected :(
                <br />
                Select a year to view the heatmap! :D
              </h2>
            ) : (
              <>
                <SyncLoader color="#2d46b9" />
                <h2>{`Getting data for ${year} :D`}</h2>
              </>
            )}
          </Container>
        )}
      </Container>
    </div>
  );
}

export default Heatmap;
