import React, { useCallback, useEffect, useState } from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 

import axios from 'axios';

import { postBookmovie, Validation } from "./redux/bookmovieSlice";
import {  useSelector,useDispatch } from 'react-redux';
//import Validation from "./Validation";
function App() {
  const [checkval,setval]=useState(null);
  const dispatch =useDispatch();




  // const Bookmovie = useSelector((state) =>state.bookmovie.Bookmovie);
//   console.log("appbook",Bookmovie);


const postBook = () => {

 
  dispatch(postBookmovie());

   

}
const valid = useSelector((state) =>state.bookmovie.valid);



  return (
 
    <>
   
    <h3>Book That Show !!</h3>
      <div className="row">
        <div className="col-lg-8">
        
        {valid!=="false"?valid:""}
          {/*Component Contain all the movies name */}
          <Movie  />
          {/*Component Contain all the movies time */}
          <Time />
          {/*Component Contain all the movie Seats */}
          <Seats />
        </div>
        <div className="col-lg-4">
          {/*Component Contain all the booking details */}
          <BookDetails/>
        </div>
      </div>
         {/*Button to book movie */}
      <button className="book" onClick={postBook}>Book now</button>
    </>
  );
}

export default App;
