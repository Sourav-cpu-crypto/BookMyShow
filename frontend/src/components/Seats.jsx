import React, { memo } from 'react'
import {  useSelector,useDispatch } from 'react-redux';
import store from '../redux/store';
import { setSeats } from '../redux/bookmovieSlice';
const Seats = () => {
  console.log("seatstore",store.getState())
   const seats = useSelector((state) =>state.bookmovie.Bookmovie.seats);
 console.log("seatbook",seats);

  const dispatch =useDispatch();
  function seldeselectseats(e){
 
    const val = seats[e.target.name];
    console.log("val",val);
if(Number(val)>0)
{

  
  dispatch(setSeats({ [e.target.name]:0}));
  console.log("seatstore",store.getState())
}


  }
  // console.log("seats",Bookmovie);

  function selectseats(e){
    let name=e.target.name;
    let value=e.target.value
    dispatch(setSeats({ [e.target.name]:value}));
    // const updatedSeats = {
    //   ...Bookmovie.seats,
    //   [e.target.name]: e.target.value
    // };
    
    // setBookmovie({...Bookmovie,seats:updatedSeats});
    console.log("seatstore",store.getState())
  }
 

  // console.log("seats",Bookmovie);
  return (
    <div>
        <div className="border rounded border-dark mb-1">
            <h3>Select The Seats</h3>
            {/*Check box for showing Movies Seats Type */}
            <input
              type="checkbox"
              class="btn-check"
              name="A1"
              id="9"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="9">
              <div className="m-0 p-0">Type A1</div>
              <div><input type='number' name="A1"
               onChange={(e)=>selectseats(e)}/></div>
            </label>
            

            <input
              type="checkbox"
              class="btn-check"
              name="A2"
              id="10"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="10">
              <div className="m-0 p-0">Type A2</div>
              <div><input type='number'  name="A2" 
               onChange={(e)=>selectseats(e)} /></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="A3"
              id="11"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="11">
              <div className="m-0 p-0">Type A3</div>
              <div><input type='number' name="A3" onChange={(e)=>selectseats(e)} /></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="A4"
              id="12"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="12">
              <div className="m-0 p-0">Type A4</div>
              <div><input type='number' name="A4" onChange={(e)=>selectseats(e)}/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="D1"
              id="13"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="13">
              <div className="m-0 p-0">Type D1</div>
              <div><input type='number' name="D1" onChange={(e)=>selectseats(e)}/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="D2"
              id="14"
              autocomplete="off"
              onChange={(e)=>seldeselectseats(e)}           
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="14">
              <div className="m-0 p-0">Type D2</div>
              <div><input name="D2" type='number'
              onChange={(e)=>selectseats(e)}/></div>
            </label>
          </div>
    </div>
  )
}

export default Seats