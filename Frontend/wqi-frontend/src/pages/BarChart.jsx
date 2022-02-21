import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table} from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
// import states from "../states";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import { SyncLoader } from "react-spinners";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

function LineChart() {
  const [wqiData, setWqiData] = useState([]);
  const [year, setYear] = useState(0);
  const options = [{name: "--Select a year--", value: 0}];

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
    setWqiData(null);
    if (year === 0) return;
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
        <Row>
          <Col>
            {wqiData ? (
              <div className="graph-placeholder" id="graphplaceholder">
                <Plot
                  data={[
                    {
                      x: wqiData,
                      type: "histogram",
                      marker: {
                        color: [
                          "cyan",
                          "lightgreen",
                          "yellow",
                          "orange",
                          "red",
                        ],
                      },
                    },
                  ]}
                  layout={{
                    title: `WQI distribution for ${year}`,
                    autosize: true,
                    xaxis: {
                      title: "Class",
                    },
                    yaxis: {
                      title: "WQI count",
                    },
                  }}
                  useResizeHandler
                />
              </div>
            ) : (
              <Container className="barchart-loader">
                {year === 0 ? (
                  <h2>
                    No year selected :(
                    <br />
                    Select a year to view the Bar chart! :D
                  </h2>
                ) : (
                  <>
                    <SyncLoader color="cyan" />
                    <h2>{`Getting data for ${year} :D`}</h2>
                  </>
                )}
              </Container>
            )}
          </Col>
          {/* <Col lg={4}>
            <div className="info-container"></div>
          </Col> */}
        </Row>
        <div className="condition-table">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Class</th>
            <th>Condition</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>Excellent</td>
            <td><span class="condition-A"></span></td>
          </tr>
          <tr>
            <td>B</td>
            <td>Good</td>
            <td><span class="condition-B"></span></td>
          </tr>
          <tr>
            <td>C</td>
            <td>Okay</td>
            <td><span class="condition-C"></span></td>
          </tr>
          <tr>
            <td>D</td>
            <td>Bad</td>
            <td><span class="condition-D"></span></td>
          </tr>
          <tr>
            <td>E</td>
            <td>Worse</td>
            <td><span class="condition-E"></span></td>
          </tr>
        </tbody>
      </Table>
        </div>
      </Container>
      
    </div>
  );
}

export default LineChart;
