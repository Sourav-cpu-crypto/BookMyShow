import React, { useCallback, useEffect, useState } from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 
import store from './redux/store';
import axios from 'axios';
import { postBookmovie,getlatestbook  } from "./redux/bookmovieSlice";
import {  useSelector,useDispatch } from 'react-redux';
function App() {
  const dispatch =useDispatch();
  console.log("store1",store.getState())

 const Bookmovie = useSelector((state) =>state.bookmovie.Bookmovie);
  console.log("appbook",Bookmovie);


const postBook = () => {
  dispatch(postBookmovie());
 
   
  // console.log("appbook",Bookmovie);
  // console.log("bookanewmovie",Bookmovie);
  // axios.post('http://localhost:8000/api/booking',Bookmovie)
  //   .then((response) => {
  // getlatestbook();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

 
console.log("latest");
  return (
 
    <>
   
    <h3>Book That Show !!</h3>
      <div className="row">
        <div className="col-lg-8">
          {/*Component Contain all the movies name */}
          <Movie  />
          {/*Component Contain all the movies time */}
          <Time />
          {/*Component Contain all the Seats */}
          <Seats />
        </div>
        <div className="col-lg-4">
          {/*Component Contain all the booking details */}
          <BookDetails/>
        </div>
      </div>
      <button className="book" onClick={postBook}>Book now</button>
    </>
  );
}

export default App;
