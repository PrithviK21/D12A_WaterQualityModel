import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import pdficon from "../assets/pdficon.png";
function Dataset() {
  const [riverData, setRiverData] = useState(null);
  const [counter, setCounter] = useState(0);

  const getData = (val) => {
    const endpoint = "http://127.0.0.1:8000/dataset/?counter=" + val;
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setRiverData(data);
      })
      .catch((e) => {
        //console.log(e);
      });
  };
  const downloadData = () => {
    let link = document.createElement("a");
    link.href = "http://127.0.0.1:8000/pdfdata/";
    link.click();
  };
  useEffect(() => {
    /* added a loader and later optimized the backend as well so loader not too necessary
      to set it back to null, remove if you think its not needed */
    setRiverData(null);
    getData(counter);
  }, [counter]);

  const DisplayData =
    riverData &&
    riverData.map((i, key) => {
      return (
        <tr key={key}>
          <td>{i.YEAR}</td>
          <td>{i.CODE}</td>
          <td>{i.LOCATION}</td>
          <td>{i.RIVER}</td>
          <td>{i.STATE}</td>
          <td>{i.TEMPERATURE}</td>
          <td>{i.DO}</td>
          <td>{i.PH}</td>
          <td>{i.CONDUCTIVITY}</td>
          <td>{i.BOD}</td>
          <td>{i.NITRATE}</td>
          <td>{i.COLIFORM}</td>
        </tr>
      );
    });

  const next = () => {
    if (counter === 198) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const previous = () => {
    if (counter === 0) {
      setCounter(198);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className="dataset-table-wrapper">
      <div className="dataset-title-container">
        <h2 className="page-header">Dataset</h2>
        <Button className="download-btn" onClick={downloadData}>
          <img src={pdficon} alt="PDF icon" /> <p>Download as PDF</p>
        </Button>
      </div>
      <div className="dataset-buttons">
        <Button id="previous" onClick={previous} className="prev-page">
          {"< Prev Page"}
        </Button>
        <div className="dataset-counter">{counter + 1}</div>
        <Button id="next" onClick={next} className="next-page">
          {"Next Page >"}
        </Button>
      </div>
      {riverData ? (
        <Table className="dataset-table" striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Station code</th>
              <th>Location</th>
              <th>River</th>
              <th>State</th>
              <th>Temperature</th>
              <th>Dissolved oxygen</th>
              <th>PH</th>
              <th>Conductivity</th>
              <th>BOD</th>
              <th>Nitrate</th>
              <th>Total coliform</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </Table>
      ) : (
        <div className="dataset-loader">
          <SyncLoader color="#2d46b9" />
        </div>
      )}
      <div className="dataset-buttons">
        <Button id="previous" onClick={previous} className="prev-page">
          {"< Prev Page"}
        </Button>
        <div className="dataset-counter">{counter + 1}</div>
        <Button id="next" onClick={next} className="next-page">
          {"Next Page >"}
        </Button>
      </div>
    </Container>
  );
}

export default Dataset;
