import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
import rivers from "../rivers";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import { SyncLoader } from "react-spinners";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

function LineChart() {
  const [activeTab, setActiveTab] = useState("Individual");
  const [riverData, setRiverData] = useState(null);
  const [river, setRiver] = useState("ALKANANDA");
  const [firstriver, setFirstRiver] = useState("ALKANANDA");
  const [secondriver, setSecondRiver] = useState("ARPA");
  const [comparedata, setCompareData] = useState(null);
  const options = rivers;

  const handleChange = (val) => {
    //console.log(val);
    setRiver(val);

    // axios({
    //   method: 'get',
    //   url: 'http://127.0.0.1:8000/api/?rivername=GANGA',
    //   data: {
    //     rivername: val
    //   }
    // }).then((response) => {
    //   //console.log(response.data);
    //   refreshPage();
    // });
  };

  const handleChangefirst = (val) => {
    //console.log(val);
    setFirstRiver(val);
  };

  const handleChangesecond = (val) => {
    //console.log(val);
    setSecondRiver(val);
  };

  // axios.get(endpoint)
  //   .then((response) => {
  //     const data = response.data
  //     //console.log(data)
  //   })
  //   .catch(e => {
  //     //console.log(e)
  //   })

  //   var trace1 = data.trace1;
  //   var data = trace1;

  //       var layout = {
  //           width: 500,
  //           height: 500,
  //       };

  //       Plotly.newPlot(graphplaceholder, data, layout);

  useEffect(() => {
    const endpoint = "http://127.0.0.1:8000/modelriverapi/?rivername=" + river;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setRiverData(data);
        //console.log(data);
      })
      .catch((e) => {
        //console.log(e);
      });
  }, [river]);

  useEffect(() => {
    const endpoint =
      "http://127.0.0.1:8000/compareapi/?comparerivername=" +
      firstriver +
      "," +
      secondriver;
    axios
      .get(endpoint)
      .then((response) => {
        const comdata = response.data;
        setCompareData(comdata);
        //console.log(comdata);
      })
      .catch((e) => {
        //console.log(e);
      });
  }, [firstriver, secondriver]);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("Individual");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("Compare");
  };

  return (
    <div>
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li
            className={activeTab === "Individual" ? "active" : ""}
            onClick={handleTab1}
          >
            INDIVIDUAL
          </li>
          <li
            className={activeTab === "Compare" ? "active" : ""}
            onClick={handleTab2}
          >
            COMPARE
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "Individual" ? (
            <Container className="map-container">
              <Row className="comparehead">
                <h1>LINE GRAPH</h1>
              </Row>
              <Row xs={1}>
                <Col>
                  <SelectSearch
                    options={options}
                    placeholder="Choose your river"
                    search
                    filterOptions={fuzzySearch}
                    onChange={handleChange}
                    value={river}
                  />
                </Col>
              </Row>
              <Row>
                {riverData ? (
                  <div className="graph-placeholder" id="graphplaceholder">
                    <Plot
                      data={[riverData.trace1, riverData.trace2]}
                      layout={{
                        title: { text: `River ${river}` },
                        autosize: true,
                        xaxis: {
                          title: "Year",
                        },
                        yaxis: {
                          title: "WQI",
                        },
                      }}
                      useResizeHandler
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ) : (
                  <div className="linechart-loader">
                    <SyncLoader color="cyan" />
                  </div>
                )}
                {/* <Col lg={4}>
            <div className="info-container"></div>
          </Col> */}
              </Row>
            </Container>
          ) : (
            <Container className="map-container">
              <Row className="comparehead">
                <h1>COMPARE TWO RIVERS</h1>
              </Row>
              <Row xs={2}>
                <Col>
                  <SelectSearch
                    options={options}
                    placeholder="Choose a river"
                    search
                    filterOptions={fuzzySearch}
                    onChange={handleChangefirst}
                    value={firstriver}
                  />
                </Col>
                <Col>
                  <SelectSearch
                    options={options}
                    placeholder="Choose another river"
                    search
                    filterOptions={fuzzySearch}
                    onChange={handleChangesecond}
                    value={secondriver}
                  />
                </Col>
              </Row>
              <Row>
                {comparedata ? (
                  <div className="graph-placeholder">
                    <Plot
                      data={[comparedata.trace1, comparedata.trace2]}
                      layout={{
                        autosize: true,
                        xaxis: {
                          title: "Year",
                        },
                        yaxis: {
                          title: "WQI",
                        },
                      }}
                      useResizeHandler
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ) : (
                  <div className="linechart-loader">
                    <SyncLoader color="#2d46b9" />
                  </div>
                )}
              </Row>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
}

export default LineChart;
