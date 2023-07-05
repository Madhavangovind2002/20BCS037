import React, { useEffect, useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "./App.css";
// import axios from "axios";
function App() {
  const [APIData, setAPIData] = useState([]);
  // const ACCESS_TOKEN =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg1MzcwMjYsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNGM3MGMzMDQtOTc1MS00OTdjLThmNzctNDRkODQ1MjYyZDQzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjI1In0.rCVem0JWPxE5i3Q7BNU36TNGBjZZrylzuI_LXsPL2wI"; // Replace with your authentication token

  // useEffect(() => {
  //   axios
  //     .get(`http://104.211.219.98/train/trains`, {
  //       headers: {
  //         Authorization: `Bearer ${ACCESS_TOKEN}`,
  //       },
  //     })
  //     .then((response) => {
  //       setAPIData(response.data);
  //     });
  // }, []);
  const getData = () => {
    fetch("train.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setAPIData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  function HandleClick(){
  }
  return (
    <>
      <div className="App">
        TrainName &nbsp;&nbsp;TrainNumber&nbsp;&nbsp; TrainTime&nbsp;&nbsp;&nbsp;&nbsp;TrainType 
        {APIData.map((data) => {
          return (
            <div className="train">
                 {data.trainName} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 {data.trainNumber} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 {data.departureTime.Hours} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 {data.seatsAvailable.sleeper} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;<button onClick={HandleClick} >View</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
