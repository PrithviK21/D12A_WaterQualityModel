import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
// import Linegraph from "../Linegraph"
import rivers from "../rivers";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);
function LineChart() {
  const [riverData, setRiverData] = useState([]);
  const options = rivers;

  function refreshPage() {
    window.location.href = "/";
  }

  const handleChange = (val) => {
    console.log(val);

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

    const endpoint = "http://127.0.0.1:8000/api/?rivername=" + val;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setRiverData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // axios.get(endpoint)
  //   .then((response) => {
  //     const data = response.data
  //     console.log(data)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })

  //   var trace1 = data.trace1;
  //   var data = trace1;

  //       var layout = {
  //           width: 500,
  //           height: 500,
  //       };

  //       Plotly.newPlot(graphplaceholder, data, layout);

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
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col lg={8}>
            <div className="graph-placeholder" id="graphplaceholder">
              <Plot
                data={[
                  {
                    x: riverData.x,
                    y: riverData.y,
                    type: "line",
                    marker: { color: "red" },
                  },
                ]}
                layout={{ width: 500, height: 500, title: riverData.name }}
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
