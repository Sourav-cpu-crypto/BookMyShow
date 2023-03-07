import React from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 

function App() {
  return (
    <>
    <h3>Book That Show !!</h3>
      <div className="row">
        <div className="col-lg-8">
          {/*Component Contain all the movies name */}
          <Movie/>
          {/*Component Contain all the movies time */}
          <Time/>
          {/*Component Contain all the Seats */}
          <Seats/>
        </div>
        <div className="col-lg-4">
          {/*Component Contain all the booking details */}
          <BookDetails/>
        </div>
      </div>
      <button className="book">Book now</button>
    </>
  );
}

export default App;
