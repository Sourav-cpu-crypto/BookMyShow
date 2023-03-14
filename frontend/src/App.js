import React, { useCallback, useState } from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 
import axios from 'axios';
function App() {
  const [Bookmovie,setBookmovie]=useState({"movie":"",
  "seats":{"A1":0,"A2":0,"A3":0,"A4":0,"D1":0
,"D2":0},"slot":""});


const [getlatesbook,setlatestbook]=useState();
const postBookmovie = () => {
  
  console.log("bookanewmovie",Bookmovie);
  axios.post('http://localhost:8000/api/booking',Bookmovie)
    .then((response) => {
  getlatestbook();
    })
    .catch((error) => {
      console.log(error);
    });
}
function  getlatestbook(){

  axios.get('http://localhost:8000/api/booking')
    .then((response) => {
      setlatestbook(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log("latest",getlatesbook);
  return (
    <>
    <h3>Book That Show !!</h3>
      <div className="row">
        <div className="col-lg-8">
          {/*Component Contain all the movies name */}
          <Movie setBookmovie={setBookmovie} Bookmovie={Bookmovie} />
          {/*Component Contain all the movies time */}
          <Time setBookmovie={setBookmovie} Bookmovie={Bookmovie}/>
          {/*Component Contain all the Seats */}
          <Seats setBookmovie={setBookmovie} Bookmovie={Bookmovie}/>
        </div>
        <div className="col-lg-4">
          {/*Component Contain all the booking details */}
          <BookDetails getlatesbook={getlatesbook}/>
        </div>
      </div>
      <button className="book" onClick={postBookmovie}>Book now</button>
    </>
  );
}

export default App;
