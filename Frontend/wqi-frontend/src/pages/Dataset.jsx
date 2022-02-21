import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "../select-search.css";
// import states from "../states";
import axios from "axios";
import dataset from "../assets/rivers.json"
import createPlotlyComponent from "react-plotly.js/factory";
import { SyncLoader } from "react-spinners";

function Dataset() {
  const [riverData, setRiverData] = useState([]);
  const [counter,setCounter] = useState(0);

  const getData = (val) => {
    const endpoint = "http://127.0.0.1:8000/dataset/?counter="+val;
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
  }

  useEffect(() => {
    getData(counter);
  }, [counter]);

  const DisplayData = riverData.map((i) => {
    return (
      <tr>
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
    )
  })

  const next = () => {
    if(counter == 198){
      document.getElementById("next").disabled = true;
    }
    else{
      document.getElementById("previous").disabled = false;
      var c = counter;
      c = c + 1;
      console.log(c);
      setCounter(c);
    }
  }

  const previous = () => {
    if(counter == 0){
      document.getElementById("previous").disabled = true;
    }
    else{
      document.getElementById("next").disabled = false;
      var c = counter;
      c = c - 1;
      console.log(c);
      setCounter(c);
    }
  }



  return (
    <div>
      <Container className="dataset-table">
        <h2 className="dataset-header">Dataset</h2>
        <Button id="next" onClick={next} className='next-page'>Next Page</Button>
        <Button id="previous" onClick={previous} className='prev-page'>Prev Page</Button>
        <div>
          <Table striped bordered hover>
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
            <tbody>
              {DisplayData}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Dataset;
