import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
// import states from "../states";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

function LineChart() {
  const [wqiData, setWqiData] = useState([]);
  const [year, setYear] = useState("");
  const options = [];

  for (let i = 2008; i <= 2019; i++) {
    options.push({ name: i, value: i });
  }

  const handleChange = (val) => {
    console.log(val);
    setYear(val);

    // axios({
    //   method: 'get',
    //   url: 'http://127.0.0.1:8000/api/?rivername=GANGA',
    //   data: {
    //     rivername: val
    //   }
    // }).then((response) => {
    //   console.log(response.data);
    //   refreshPage();
    // });
  };

  useEffect(() => {
    const endpoint = "http://127.0.0.1:8000/countwqiapi/?year=" + year;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setWqiData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [year]);

  return (
    <div>
      <Container className="map-container">
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
        <Row xs={1} md={2}>
          <Col lg={8}>
            <div className="graph-placeholder" id="graphplaceholder">
              <Plot
                data={[
                  {
                    x: wqiData,
                    type: "histogram",
                    colorscale: "Earth",
                  },
                ]}
                layout={{
                  width: 500,
                  height: 500,
                  title: `WQI distribution for ${year}`,
                }}
              />
            </div>
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
